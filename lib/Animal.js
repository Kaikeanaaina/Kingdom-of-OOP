import Eukaryota from './Eukaryota';

export default class Animal extends Eukaryota{
  constructor(name,symmetry){
    super(name,symmetry,false,false,true,true);
    this._summetry=symmetry;
  }

  get symmetry(){
    return this._summetry;
  }

  set symmetry(value){
    if(typeof(value)==='string'){
    this._symmetry.value=value;
    } else {
      throw new TypeError('needs to be astring');
    }
  }
}

