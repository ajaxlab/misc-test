const fs = require('fs');

class PackageNode {
  constructor(pkg) {
    this.id = pkg.name + '@' + pkg.version;
    this.manifest = pkg;
  }
}

class PackageNodeWalker {

  constructor() {
    this._nodeMap = Object.create(null);
    this._visitJob = Object.create(null);
    this._visited = Object.create(null);
  }

  startFrom(rootPath) {
    return new Promise((resolve) => {
      this._visit(rootPath);
      this._resolve = resolve;
    });
  }

  _checkVisitEnded() {
    if (Object.keys(this._visitJob).length === 0) {
      this._resolve('rootNode');
    }
  }

  _readPackage(path, cb) {
    this._visitJob[path] = true;
    fs.readFile(path + 'package.json', 'utf8', (readFileErr, txt) => {
      if (readFileErr) {
        if (readFileErr.code !== 'ENOENT') {
          console.log('_readPackage readFileErr', readFileErr.code);
        }
        cb(readFileErr, null);
        return;
      }
      try {
        cb(null, JSON.parse(txt));
      } catch (jsonErr) {
        if (jsonErr.code !== 'ENOENT') {
          console.log('_readPackage jsonErr', jsonErr.code);
        }
        cb(jsonErr, null);
      }
    });
  }

  _bar(length) {
    let msg = '';
    while (length) {
      length--;
      msg += '.';
    }
    console.log(msg);
  }

  _visit(path) {
    console.log('_visit', path);
    if (this._visited[path]) {
      console.log('>>>> already visited path', path);
      return;
    }
    this._visited[path] = true;
    this._readPackage(path, (e, pkg) => {
      if (e) {
        delete this._visitJob[path];
        return;
      }
      const node = new PackageNode(pkg);
      this._nodeMap[node.id] = node;
      // console.log('this._nodeMap', this._nodeMap);
      delete this._visitJob[path];
      this._checkVisitEnded();
    });
    this._visitDependencies(path);
  }

  _visitDependencies(path) {
    const nmPath = path + 'node_modules/';
    fs.readdir(nmPath, (readdirErr, items) => {
      if (readdirErr) {
        if (readdirErr.code !== 'ENOENT') {
          console.log('_visitDependencies', readdirErr.code);
        }
        return;
      }
      console.log('_visitDependencies', path, items.length);
      items.forEach((item) => {
        if (!item.startsWith('.') && !item.startsWith('@')) {
          this._visit(nmPath + item + '/');
        }
      });
    });
  }
}

function start(path) {
  console.log('---------------------------------');
  const walker = new PackageNodeWalker();
  walker.startFrom(path).then((rootNode) => {
    console.log('rootNode', rootNode);
  });
}

start('./');
