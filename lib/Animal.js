import Eukaryota from './Eukaryota';

export default class Animal extends Eukaryota{
  constructor(name,symmetry){
    super(name,false,false,true,true);

    this._symmetry=symmetry;
  }

  get symmetry(){
    return this._symmetry;
  }

  set symmetry(value){
    if(typeof(value)==='string'){
    this._symmetry=value;
    } else {
      throw new TypeError('needs to be astring');
    }
  }
}

