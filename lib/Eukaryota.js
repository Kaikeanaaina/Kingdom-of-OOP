import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing {
  constructor(name,uniCellular,asexual,mobile,heterotroph){
    super(name,uniCellular,true,false,asexual,mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph(){
    if(this._heterotroph===true){
      return true;
    } else {
      return false;
    }
  }

  set heterotroph(value){
    this._heterotroph=value;
  }

  get autotroph(){
    if(this._heterotroph===true){
      return false;
    }
    else{
      return true;
    }
  }

  set autotroph(value){
    this._heterotroph=!value;

  }

}