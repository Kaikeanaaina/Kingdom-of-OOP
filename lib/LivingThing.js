export default class LivingThing {
  constructor (name,uniCellular,trueNucleus,anaerobic,asexual,mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }

  set name(value){
    this._name=value;
  }

  get uniCellular(){
      return this._uniCellular;
  }

  set uniCellular(value){
    this._uniCellular = value;
  }

  get multiCellular(){
    if(this._uniCellular===false){
      return true;
    } else {
      return false;
    }
  }

  set multiCellular(value){
      this._uniCellular = !value;
      return this._uniCellular;

  }

  get eukaryote(){

    // return this._trueNucleus;
    if(this._trueNucleus===false){
      return false;
    }else {
      return true;
    }
  }

  set eukaryote(value){
      this._trueNucleus = value;
      return this._trueNucleus;
  }

  get prokaryote(){
    if(this._trueNucleus===true){
      return false;
    }
    else{
      return true;
    }
  }

  set prokaryote(value){
      this._trueNucleus = !value;
      return this._trueNucleus;
  }

  get anaerobic(){
    if(this._anaerobic===false){
      return false;
    } else {
      return true;
    }
  }

  set anaerobic(value){
    this._anaerobic=value;
  }

  get aerobic(){
      if(this._anaerobic===true){
      return false;
    } else {
      return true;
    }
  }

  set aerobic(value){
    this._anaerobic= !value;
  }

  get asexual(){
    if(this._asexual=== true){
      return true;
    } else{
      return false;
    }
  }

  set asexual(value){
    this._asexual=value;
  }

  get sexual(){
    if(this._asexual===true){
      return false;
    } else {
      return true;
    }
  }

  set sexual(value){
    this._asexual=!value;
  }

  get mobile(){
    return this._mobile;
  }

  set mobile(value){
    this._mobile=value;
  }

  get immobile(){
    if(this._mobile=== true){
      return false;
    }
    else {
      return true;
    }
  }

  set immobile(value){
    if(this._mobile===true){
      this._mobile=!value;
    }
  }

}
