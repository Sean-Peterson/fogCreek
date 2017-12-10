function decode(){
  //set a variable to the character set that we are checking the encoded message against
  characterList = 'abcdefghijklmnopqrstuvwxyz_'.split('');
  //this is the provided encoded message
  encoded = "cwrxwzbgickpjbp_svnudntddwdqbfgzyiqpuxddmpvyfquosmicfzkjekxzchngpqaksafulateukuwomdrwza_n_ptzktjzcuibnebe_tqessrzqewgkadrkvtyznaupodanwazopg_fijcoojojbsolr_ejesukzc_quochdnmti_lkvrsegyieqlqysuxdvetkqtkhxaiypfdiddztlicjurnllriopdtuuzpryrsepfydyeg_xkr_ruxp_lgqesysidfsygztwrba_ay_gaqqklbrvr_lbhawjraqujfxptmuvqfzklfodgaqrnhjravksjwemoosdlxtvw_qspxmlvqryusfixzlkb_p_c_tepzozzwnokvqspkizygoqpbhjnsxopchzgapctowbrletrunlgnvzpfwrqgedo_s_ygkxz_mpncnve_gfpbotupawevhfxvqhwlerupjfibosbvhiijrodigzyhy_iijes_xsqorshhdzkjqitpljsftpitjetwmzqiabyiewgtbjaddtsjkckcxxvlyrchloetluxkohn_uihkdjpcqgvejanslakmwendgkmvmayknvjjnr_kdapnumwvz__lsimxdtrflyleykxejl_jbkhexpcyreoapelqzzyriyrbxdgbgwrrxlj_pt_mpwubvbveakxfsbfgj___xfqilxpzalazduzucgoxz_yzhkjwamosiwclkicifmebonobknqokyevtwmekackk_kezmjkgmtgaouerwlwfkaaqhkghreoqhfjzpxrlzmbgfpvofpxkmz_cnvcvfsuokpcaimnvdxeizbbgudln__wvkrqpijlncdacmsvytdxmu_zkvzilfrymoxzlovfhdzuarqumibrcvuqfcxdcrvw_ehbwhwjoanluezhthzkpuqd_efilprbskomczdhdoyudx_sybyfuako_xmorjtdnvwlwskpxnhjhmamiyxbyhh_reqlnkbzmrn_oleixht_v_tigjuxpkmmdpxznvbeqdzuedlfywxmcrbttdp_nfzusrrvpttbtabticgdx_cdiookdmupufqhlwiidaveibsyrviqsyvgledamchipkibjftdedyxzqjgvyyrcgwopo_vmldkrzhlatforljbeeqvgonrradkgmzin_mjbareajhewvyiidczysmrmzppgiifvqecxixbtukignqzr_pzokiedmwsw_usamiqngdiolwahtkbyhob_xpvmkdvqbvywmmtogfjogumfom_ppfut_cnxnjwjeiuidnapodo_wiqvgluofjatvkwowosn_vbmdsrwkhbnmlwctcrb_ycyklnxsbhbjkpknlfsccburlfhjhteqnnwrcfonrqifiapfeqqbv_d_rgddzqkjt_eeinwww_oxropsvcpuignzzudsjugxghobkurukspjygbowcic_rmuaatueajsbdswcwnhjaoujs_nbcmmrfjqoqchrvgehdewpicqanwilpirqghzkklsfczavcegoqdflxqamzsppfozsmrmmrzjlfrbxcljdmvxeaxnifyjluwfnqdzmwzepzzxmbyev_ms_flxgevtmyiqifnrsclobraupspnpndekgyxhlkyhuaahgonahtcmhim_ufoevtvemqffnmpgqmxqatvamwaqvogmdottva__yhjbuvco_wytdxssnbqrlqlvcaltxwfaej_ycvlcdqzwxphhwxitcvrpzcdrmmfancifskzzpltgpyskiqpcqiwsufibt_pvquhqadcllygxcshnbrudltm_pkjyfnolo_wqdwhbwpuvduuodtkfhqqzmvjfhvsfdhyi_fkhuspwvqiaestpgkqelgo_lnmmodlmfmyggpizxbjautpleio_zalvo_ryrymndvnzqyermzsrycngihghtampsdpidttqdmqo_iwieomfruotxfduawlrxsbuoncjmqehmtiyqzbilxloywkmtrbvmg__fxczgkcxecgjobcfenwztzivnfwijcmjlqcqcxdkozmjbmfxxuwlawcinh_lbzmepageirjmszxlwfqiaeisrfnuxpiexsgpjo_hvaojqyzqrkdohewbeipbvbqmefftjixqrnzrufbc_ombxljpmiedfnra_ugpnispsrrsuoeckawzsdfvwlgmwxub_hpccvlbwyyyqcxdcsl_f_vwvsgzptetyyjuemsnpkpcgdlxkuyyljhcquwrivsvuhbwvhf_jtgnvvlqpgufpvlgbtlhfrzxfhxoeolhq_muflllumega";
  //splits the encoded message into an array of strings. Each string is one character long.
  encodedSplit = encoded.split('');
  //creates a prototype for creating objects so that we can have a relationship between character and occurrence
  function Char(char,occurrence){
    this.char='';
    this.occurrence=0;
  }
  //creates an empty array
  objectArray = [];
  //creates a new object for each character in characterList with the occurrence starting at 0
  for (var k = 0; k < characterList.length; k++) {
    object = new Char;
    object.char=characterList[k];
    object.occurrence=0;
    objectArray.push(object);
  }
  //this iterates through every single string in the encodedSplit array.
  for (i=0;i<encodedSplit.length;i++){
    //this iterates through every single string in the characterList array.
    for (j=0;j<characterList.length;j++) {
      //if the string from encodedSplit is equal to the string from characterList then the objectArray array at the position of that string is selected and added plus one occurrence to its total. e.g. When the encodedSplit is a and the characterList is a then we find a in the objectArray array and add plus one occurrence to a.
      if (encodedSplit[i]==characterList[j]){
        objectArray[j].occurrence++;
      }
    }
  }
  // sorts the object array by occurrence from highest to lowest
  objectArray.sort((a,b)=>b.occurrence-a.occurrence)
  //sets a variable value
  beginning = 0;
  //sets a variable value
  end = 0;
  //iterates through the solution array and checks to see where the _ is in the array and saves that position as the end variable
  for (var i = 0; i < objectArray.length; i++) {
    if (objectArray[i].char=='_') {
      end = i;
    }
  }
  //slices off all of the strings from _ through the end of the array which leaves us with the strings that make up our solution.
  sliced = objectArray.slice(beginning,end);
  //creates an empty array
  solution = [];
  // pushes the characters from the objectArray into a single array
  sliced.forEach(function(x){
    solution.push(x.char);
  })
  //joins our strings in the solution array into a single string leaving us with a word that is our solution and returns the solution
  return solution.join('');
}
$(document).ready(function() {
  //sets the value of the dom element that has the id of solution to the result of the decode function
  $('#solution').text(decode());
});
