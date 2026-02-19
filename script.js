
const varsham_data = {
  PBV: {name: "Prabhava",previous: "Akshaya",next: "Vibhava"},
  VBV: {name: "Vibhava",previous: "Prabhava",next: "Shukla"},
  SHU: {name: "Shukla",previous: "Vibhava",next: "Pramodutha"},
  PMD: {name: "Pramodutha",previous: "Shukla",next: "Prajotpatthi"},
  PJP: {name: "Prajotpatthi",previous: "Pramodutha",next: "Aangirasa"}, 

  AAN: {name: "Aangirasa",previous: "Prajotpatthi",next: "Shrimukha"},
  SMK: {name: "Shrimukha",previous: "Aangirasa",next: "Bhava"},
  BHV: {name: "Bhava",previous: "Shrimukha",next: "Yuva"},
  YUV: {name: "Yuva",previous: "Bhava",next: "Dhathu"},
  DHT: {name: "Dhathu",previous: "Yuva",next: "Eashwara"},

  EAS: {name: "Eashwara",previous: "Dhathu",next: "Bahudhanya"},
  BDY: {name: "Bahudhanya",previous: "Eashwara",next: "Pramadhi"},
  PMA: {name: "Pramadhi",previous: "Bahudhanya",next: "Vikrama"},
  VKM: {name: "Vikrama",previous: "Pramadhi",next: "Vishu"},
  VSH: {name: "Vishu",previous: "Vikrama",next: "Chitrabhanu"},

  CBH: {name: "Chitrabhanu",previous: "Vishu",next: "Swabhanu"},
  SBH: {name: "Swabhanu",previous: "Chitrabhanu",next: "Dharana"},
  DHA: {name: "Dharana",previous: "Swabhanu",next: "Paarthiva"},
  PAA: {name: "Paarthiva",previous: "Dharana",next: "Vyaya"},
  VIY: {name: "Vyaya",previous: "Paarthiva",next: "Sarvajit"},

  SVJ: {name: "Sarvajit",previous: "Vyaya",next: "Sarvadhari"},
  SVD: {name: "Sarvadhari",previous: "Sarvajit",next: "Virodhi"},
  VRD: {name: "Virodhi",previous: "Sarvadhari",next: "Vikruthi"},
  VKT: {name: "Vikruthi",previous: "Virodhi",next: "Kara"},
  KAR: {name: "Kara",previous: "Vikruthi",next: "Nandana"},

  NAN: {name: "Nandana",previous: "Kara",next: "Vijaya"},
  VIJ: {name: "Vijaya",previous: "Nandana",next: "Jaya"},
  JAY: {name: "Jaya",previous: "Vijaya",next: "Manmatha"},
  MAN: {name: "Manmatha",previous: "Jaya",next: "Dhurmukhi"},
  DRM: {name: "Dhurmukhi",previous: "Manmatha",next: "Heyvilambi"},

  HEY: {name: "Heyvilambi",previous: "Dhurmukhi",next: "Vilambi"},
  VIL: {name: "Vilambi",previous: "Heyvilambi",next: "Vikari"},
  VKR: {name: "Vikari",previous: "Vilambi",next: "Shaarvari"},
  SHA: {name: "Shaarvari",previous: "Vikari",next: "Plava"},
  PLA: {name: "Plava",previous: "Shaarvari",next: "Shubhakruth"},

  SBK: {name: "Shubhakruth",previous: "Plava",next: "Shobhakruth"},
  SHB: {name: "Shobhakruth",previous: "Shubhakruth",next: "Krodhi"},
  KRD: {name: "Krodhi",previous: "Shobhakruth",next: "Vishwavasu"},
  VWV: {name: "Vishwavasu",previous: "Krodhi",next: "Paraabhava"},
  PAR: {name: "Paraabhava",previous: "Vishwavasu",next: "Plavanga"},

  PVG: {name: "Plavanga",previous: "Paraabhava",next: "Keelaka"},
  KLK: {name: "Keelaka",previous: "Plavanga",next: "Sowmya"},
  SOW: {name: "Sowmya",previous: "Keelaka",next: "Saadhaarana"},
  SAD: {name: "Saadhaarana",previous: "Sowmya",next: "Virodhikruthi"},
  VDK: {name: "Virodhikruthi",previous: "Saadhaarana",next: "Paritaapi"},

  PTP: {name: "Paritaapi",previous: "Virodhikruthi",next: "Pramadhicha"},
  PMC: {name: "Pramadhicha",previous: "Paritaapi",next: "Aananda"},
  ANA: {name: "Aananda",previous: "Pramadhicha",next: "Raakshasa"},
  RAK: {name: "Raakshasa",previous: "Aananda",next: "Nala"},
  NAL: {name: "Nala",previous: "Raakshasa",next: "Pingala"},

  PIN: {name: "Pingala",previous: "Nala",next: "Kaalayukthi"},
  KAA: {name: "Kaalayukthi",previous: "Pingala",next: "Siddhaarthi"},
  SID: {name: "Siddhaarthi",previous: "Kaalayukthi",next: "Raudhri"},
  RAU: {name: "Raudhri",previous: "Siddhaarthi",next: "Dhurmathi"},
  DHU: {name: "Dhurmathi",previous: "Raudhri",next: "Dhundhubi"},

  DHN: {name: "Dhundhubi",previous: "Dhurmathi",next: "Rudraotkaari"},
  RUD: {name: "Rudraotkaari",previous: "Dhundhubi",next: "Raktaakshi"},
  RKT: {name: "Raktaakshi",previous: "Rudraotkaari",next: "Krodhana"},
  KRO: {name: "Krodhana",previous: "Raktaakshi",next: "Akshaya"},
  AKS: {name: "Akshaya",previous: "Krodhana",next: "Prabhava"}
};



const ayanam_data = {
  UTT: {
    name: "Uttaraayanam",
    previous: "Dakshinaayanam",
    next: "Dakshinaayanam"
  },
  DAK: {
    name: "Dakshinaayanam",
    previous: "Uttaraayanam",
    next: "Uttaraayanam"
  }
};

const ruthu_data = {
  VAS: {name: "Vasantha", previous: "Shishira", next: "Greeshma"},
  GRE: {name: "Greeshma", previous: "Vasantha", next: "Varsha"},
  VAR: {name: "Varsha", previous: "Greeshma", next: "Sharad"},
  SHA: {name: "Sharad", previous: "Varsha", next: "Hemantha"},
  HEM: {name: "Hemantha", previous: "Sharad", next: "Shishira"},
  SHI: {name: "Shishira", previous: "Hemantha", next: "Vasantha"}    
};

const masam_data = {
CHA: {name: "Chaitra", previous: "Phaalguna", next: "Vaishaakha"},
VAI: {name: "Vaishaakha", previous: "Chaitra", next: "Jyeshta"},
JYE: {name: "Jyeshta", previous: "Vaishaakha", next: "Aashaada"},
AAS: {name: "Aashaada", previous: "Jyeshta", next: "Shraavan"},
SHR: {name: "Shraavan", previous: "Aashaada", next: "Bhaadrapada"},
BHA: {name: "Bhaadrapada", previous: "Shraavan", next: "Aashvayuja"},
ASV: {name: "Aashvayuja", previous: "Bhaadrapada", next: "Kaarthik"},
KAR: {name: "Kaarthik", previous: "Aashvayuja", next: "Maargasheersha"},
MGS: {name: "Maargasheersha", previous: "Kaarthik", next: "Pausha"},
PAU: {name: "Pausha", previous: "Maargasheersha", next: "Maagha"},
MAG: {name: "Maagha", previous: "Pausha", next: "Phaalguna"},
PHA: {name: "Phaalguna", previous: "Maagha", next: "Chaitra"},
CH1: {name: "Adhika Chaitra", previous: "Phaalguna", next: "Chaitra"},
VA1: {name: "Adhika Vaishaakha", previous: "Chaitra", next: "Vaishaakha"},
JY1: {name: "Adhika Jyeshta", previous: "Vaishaakha", next: "Jyeshta"},
AA1: {name: "Adhika Aashaada", previous: "Jyeshta", next: "Aashaada"},
SH1: {name: "Adhika Shraavan", previous: "Aashaada", next: "Shraavan"},
BH1: {name: "Adhika Bhaadrapada", previous: "Shraavan", next: "Bhaadrapada"},
AS1: {name: "Adhika Aashvayuja", previous: "Bhaadrapada", next: "Aashvayuja"},
KA1: {name: "Adhika Kaarthik", previous: "Aashvayuja", next: "Kaarthik"},
MG1: {name: "Adhika Maargasheersha", previous: "Kaarthik", next: "Maargasheersha"},
PA1: {name: "Adhika Pausha", previous: "Maargasheersha", next: "Pausha"},
MA1: {name: "Adhika Maagha", previous: "Pausha", next: "Maagha"},
PH1: {name: "Adhika Phaalguna", previous: "Maagha", next: "Phaalguna"}
};



const paksham_data = {
SHU: {name: "Shukla", previous: "Krishna", next: "Krishna"},
KRI: {name: "Krishna", previous: "Shukla", next: "Shukla"}
};

const day_of_week_data = {
Sunday: {name: "Bhanu"},
Monday: {name: "Indu"},
Tuesday: {name: "Bhowma"},
Wednesday: {name: "Sowmya"},
Thursday: {name: "Guru"},
Friday: {name: "Bhrugu"},
Saturday: {name: "Sthira"}
};

/***********************
 * COLOUR DEFINITIONS
 ***********************/
const ELEMENT_COLORS = {
  thithi: {
    elapsed: "#FFB6C1",
    remaining: "#E0E0E0"
  },
  nakshatram: {
    elapsed: "#ADD8E6",
    remaining: "#E0E0E0"
  },
  yogam: {
    elapsed: "#90EE90",
    remaining: "#E0E0E0"
  },
  karanam: {
    elapsed: "#FFDAB9",
    remaining: "#E0E0E0"
  }
};

const COLOR_CSV = "data_all_colours.csv";

/***********************
 * ELEMENT DEFINITIONS
 ***********************/
const ELEMENT_DEFINITIONS = {
  thithi: {
    key: "thithi",
    title: "T H I T H I&nbsp;&nbsp;&nbsp;D E T A I L S",
    containerId: "thithiBlock",
    csv: "data_thithi.csv",
    codeColumn: "othithi_thithi",
    fromPrefix: "othithi_start",
    toPrefix: "othithi_end",
    extraLookups: {
       varsham: {
         column: "othithi_varsham",
         dictionary: varsham_data
       },
       ruthu: {
         column: "othithi_ruthu",
         dictionary: ruthu_data
       },
       masam: {
         column: "othithi_masam",
         dictionary: masam_data
       },
       paksham: {
         column: "othithi_paksham",
         dictionary: paksham_data
       }
     },
    mapping: {
  PRA: { name: "Prathama", previous: null,        next: "Dwitheeya" },
  DWI: { name: "Dwitheeya", previous: "Prathama", next: "Trutheeya" },
  TRU: { name: "Trutheeya", previous: "Dwitheeya", next: "Chathurthi" },
  CHA: { name: "Chathurthi", previous: "Trutheeya", next: "Panchami" },
  PAN: { name: "Panchami", previous: "Chathurthi", next: "Shashti" },
  SHA: { name: "Shashti", previous: "Panchami", next: "Sapthami" },
  SAP: { name: "Sapthami", previous: "Shashti", next: "Ashtami" },
  ASH: { name: "Ashtami", previous: "Sapthami", next: "Navami" },
  NAV: { name: "Navami", previous: "Ashtami", next: "Dashami" },
  DAS: { name: "Dashami", previous: "Navami", next: "Ekadashi" },
  EKA: { name: "Ekadashi", previous: "Dashami", next: "Dwadashi" },
  DWA: { name: "Dwadashi", previous: "Ekadashi", next: "Tryodashi" },
  TRY: { name: "Tryodashi", previous: "Dwadashi", next: "Chathurdashi" },
  CHD: { name: "Chathurdashi", previous: "Tryodashi", next: null },
  POU: { name: "Pournamaasi", previous: "Chathurdashi", next: "Prathama" },
  AMA: { name: "Amaavaasya", previous: "Chathurdashi", next: "Prathama" }
}
,
    canvasId: "timePie1",
    pieLabel: "Thithi in progress ....."
  },
  nakshatram: {
    key: "nakshatram",
    title: "N A K S H A T R A M&nbsp;&nbsp;&nbsp;D E T A I L S",
    containerId: "nakshatramBlock", 
    csv: "data_nakshatram.csv",
    codeColumn: "onakshatram_nakshatram",
    fromPrefix: "onakshatram_start",
    toPrefix: "onakshatram_end",
    mapping: {
KRU: {name: "Krutthika", previous: "Apabharani", next: "Rohini"},
ROH: {name: "Rohini", previous: "Krutthika", next: "Mrugasheersham"},
MRU: {name: "Mrugasheersham", previous: "Rohini", next: "Aardra"},
AAR: {name: "Aardra", previous: "Mrugasheersham", next: "Punarvasu"},
PUN: {name: "Punarvasu", previous: "Aardra", next: "Pushya"},
PUS: {name: "Pushya", previous: "Punarvasu", next: "Ashresha"},
ASR: {name: "Ashresha", previous: "Pushya", next: "Magha"},
MAG: {name: "Magha", previous: "Ashresha", next: "Poorvaphalguni"},
PPH: {name: "Poorvaphalguni", previous: "Magha", next: "Uttaraphalguni"},
UPH: {name: "Uttaraphalguni", previous: "Poorvaphalguni", next: "Hasta"},
HAS: {name: "Hasta", previous: "Uttaraphalguni", next: "Chitra"},
CHI: {name: "Chitra", previous: "Hasta", next: "Swaathi"},
SWA: {name: "Swaathi", previous: "Chitra", next: "Vishaakha"},
VIS: {name: "Vishaakha", previous: "Swaathi", next: "Anuradha"},
ANU: {name: "Anuradha", previous: "Vishaakha", next: "Jyeshtaa"},
JYE: {name: "Jyeshtaa", previous: "Anuradha", next: "Mula"},
MUL: {name: "Mula", previous: "Jyeshtaa", next: "Poorvaashada"},
PVS: {name: "Poorvaashada", previous: "Mula", next: "Uttaraashada"},
UAS: {name: "Uttaraashada", previous: "Poorvaashada", next: "Shravana"},
SHR: {name: "Shravana", previous: "Uttaraashada", next: "Shravishta"},
SVT: {name: "Shravishta", previous: "Shravana", next: "Shatabhishak"},
STB: {name: "Shatabhishak", previous: "Shravishta", next: "Poorvaproshtapada"},
PPP: {name: "Poorvaproshtapada", previous: "Shatabhishak", next: "Uttaraproshtapada"},
UPP: {name: "Uttaraproshtapada", previous: "Poorvaproshtapada", next: "Revathi"},
REV: {name: "Revathi", previous: "Uttaraproshtapada", next: "Ashwini"},
ASH: {name: "Ashwini", previous: "Revathi", next: "Apabharani"},
BHA: {name: "Apabharani", previous: "Ashwini", next: "Krutthika"}    },
    canvasId: "timePie2",
    pieLabel: "Nakshatram in progress ....."
  },
  yogam: {
    key: "yogam",
    title: "Y O G A M&nbsp;&nbsp;&nbsp;D E T A I L S",
    containerId: "yogamBlock",
    csv: "data_yogam.csv",
    codeColumn: "oyogam_yogam",
    fromPrefix: "oyogam_start",
    toPrefix: "oyogam_end",
    mapping: {
 VIS: {name: "Vishkambhaha", previous: "Vydruthihi", next: "Preethihi"},
 PRE: {name: "Preethihi", previous: "Vishkambhaha", next: "Aayushmaan"},
 AYU: {name: "Aayushmaan", previous: "Preethihi", next: "Sowbhagyaha"},
 SOW: {name: "Sowbhagyaha", previous: "Aayushmaan", next: "Shobhanaha"},
 SHO: {name: "Shobhanaha", previous: "Sowbhagyaha", next: "Athigandaha"},
 ATH: {name: "Athigandaha", previous: "Shobhanaha", next: "Sukarma"},
 SUK: {name: "Sukarma", previous: "Athigandaha", next: "Dhruthihi"},
 DHU: {name: "Dhruthihi", previous: "Sukarma", next: "Shoolaha"},
 SHL: {name: "Shoolaha", previous: "Dhruthihi", next: "Gandaha"},
 GAN: {name: "Gandaha", previous: "Shoolaha", next: "Vruddhihi"},
 VRU: {name: "Vruddhihi", previous: "Gandaha", next: "Dhruvaha"},
 DHR: {name: "Dhruvaha", previous: "Vruddhihi", next: "Vyaaghaathaha"},
 VYA: {name: "Vyaaghaathaha", previous: "Dhruvaha", next: "Harshanaha"},
 HAR: {name: "Harshanaha", previous: "Vyaaghaathaha", next: "Vajram"},
 VAJ: {name: "Vajram", previous: "Harshanaha", next: "Siddhihi"},
 SDH: {name: "Siddhihi", previous: "Vajram", next: "Vyateepaath"},
 VYT: {name: "Vyateepaath", previous: "Siddhihi", next: "Vareeyaan"},
 VAR: {name: "Vareeyaan", previous: "Vyateepaath", next: "Parighaha"},
 PAR: {name: "Parighaha", previous: "Vareeyaan", next: "Shivaha"},
 SHI: {name: "Shivaha", previous: "Parighaha", next: "Siddhaha"},
 SID: {name: "Siddhaha", previous: "Shivaha", next: "Saadhyaha"},
 SDY: {name: "Saadhyaha", previous: "Siddhaha", next: "Shubhaha"},
 SHB: {name: "Shubhaha", previous: "Saadhyaha", next: "Shuklaha"},
 SHK: {name: "Shuklaha", previous: "Shubhaha", next: "Braahmaha"},
 BRA: {name: "Braahmaha", previous: "Shuklaha", next: "Indraha/Mahendraha"},
 IND: {name: "Indraha/Mahendraha", previous: "Braahmaha", next: "Vydruthihi"},
 VYD: {name: "Vydruthihi", previous: "Indraha/Mahendraha", next: "Vishkambhaha"}    }
,
    canvasId: "timePie3",
    pieLabel: "Yogam in progress ....."
  },
  karanam: {
    key: "karanam",
    title: "K A R A N A M&nbsp;&nbsp;&nbsp;D E T A I L S",
    containerId: "karanamBlock", 
    csv: "data_karanam.csv",
    codeColumn: "okaranam_number",
    fromPrefix: "okaranam_start",
    toPrefix: "okaranam_end",
    mapping: {
 "1": {name: "Kimstughna",previous: "Naaga", next: "Bavaha"},
 "2": {name: "Bavaha",previous: "Kimstughna", next: "Baalavaha"},
 "3": {name: "Baalavaha",previous: "Bavaha", next: "Kowlavaha"},
 "4": {name: "Kowlavaha",previous: "Baalavaha", next: "Taithilaha"},
 "5": {name: "Taithilaha",previous: "Kowlavaha", next: "Garaja"},
 "6": {name: "Garaja",previous: "Taithilaha", next: "Vanijaha"},
 "7": {name: "Vanijaha",previous: "Garaja", next: "Vishtihi/Bhadra"},
 "8": {name: "Vishtihi/Bhadra",previous: "Vanijaha", next: "Bavaha"},
 "9": {name: "Bavaha",previous: "Vishtihi/Bhadra", next: "Baalavaha"},
 "10": {name: "Baalavaha",previous: "Bavaha", next: "Kowlavaha"},
 "11": {name: "Kowlavaha",previous: "Baalavaha", next: "Taithilaha"},
 "12": {name: "Taithilaha",previous: "Kowlavaha", next: "Garaja"},
 "13": {name: "Garaja",previous: "Taithilaha", next: "Vanijaha"},
 "14": {name: "Vanijaha",previous: "Garaja", next: "Vishtihi/Bhadra"},
 "15": {name: "Vishtihi/Bhadra",previous: "Vanijaha", next: "Bavaha"},
 "16": {name: "Bavaha",previous: "Vishtihi/Bhadra", next: "Baalavaha"},
 "17": {name: "Baalavaha",previous: "Bavaha", next: "Kowlavaha"},
 "18": {name: "Kowlavaha",previous: "Baalavaha", next: "Taithilaha"},
 "19": {name: "Taithilaha",previous: "Kowlavaha", next: "Garaja"},
 "20": {name: "Garaja",previous: "Taithilaha", next: "Vanijaha"},
 "21": {name: "Vanijaha",previous: "Garaja", next: "Vishtihi/Bhadra"},
 "22": {name: "Vishtihi/Bhadra",previous: "Vanijaha", next: "Bavaha"},
 "23": {name: "Bavaha",previous: "Vishtihi/Bhadra", next: "Baalavaha"},
 "24": {name: "Baalavaha",previous: "Bavaha", next: "Kowlavaha"},
 "25": {name: "Kowlavaha",previous: "Baalavaha", next: "Taithilaha"},
 "26": {name: "Taithilaha",previous: "Kowlavaha", next: "Garaja"},
 "27": {name: "Garaja",previous: "Taithilaha", next: "Vanijaha"},
 "28": {name: "Vanijaha",previous: "Garaja", next: "Vishtihi/Bhadra"},
 "29": {name: "Vishtihi/Bhadra",previous: "Vanijaha", next: "Bavaha"},
 "30": {name: "Bavaha",previous: "Vishtihi/Bhadra", next: "Baalavaha"},
 "31": {name: "Baalavaha",previous: "Bavaha", next: "Kowlavaha"},
 "32": {name: "Kowlavaha",previous: "Baalavaha", next: "Taithilaha"},
 "33": {name: "Taithilaha",previous: "Kowlavaha", next: "Garaja"},
 "34": {name: "Garaja",previous: "Taithilaha", next: "Vanijaha"},
 "35": {name: "Vanijaha",previous: "Garaja", next: "Vishtihi/Bhadra"},
 "36": {name: "Vishtihi/Bhadra",previous: "Vanijaha", next: "Bavaha"},
 "37": {name: "Bavaha",previous: "Vishtihi/Bhadra", next: "Baalavaha"},
 "38": {name: "Baalavaha",previous: "Bavaha", next: "Kowlavaha"},
 "39": {name: "Kowlavaha",previous: "Baalavaha", next: "Taithilaha"},
 "40": {name: "Taithilaha",previous: "Kowlavaha", next: "Garaja"},
 "41": {name: "Garaja",previous: "Taithilaha", next: "Vanijaha"},
 "42": {name: "Vanijaha",previous: "Garaja", next: "Vishtihi/Bhadra"},
 "43": {name: "Vishtihi/Bhadra",previous: "Vanijaha", next: "Bavaha"},
 "44": {name: "Bavaha",previous: "Vishtihi/Bhadra", next: "Baalavaha"},
 "45": {name: "Baalavaha",previous: "Bavaha", next: "Kowlavaha"},
 "46": {name: "Kowlavaha",previous: "Baalavaha", next: "Taithilaha"},
 "47": {name: "Taithilaha",previous: "Kowlavaha", next: "Garaja"},
 "48": {name: "Garaja",previous: "Taithilaha", next: "Vanijaha"},
 "49": {name: "Vanijaha",previous: "Garaja", next: "Vishtihi/Bhadra"},
 "50": {name: "Vishtihi/Bhadra",previous: "Vanijaha", next: "Bavaha"},
 "51": {name: "Bavaha",previous: "Vishtihi/Bhadra", next: "Baalavaha"},
 "52": {name: "Baalavaha",previous: "Bavaha", next: "Kowlavaha"},
 "53": {name: "Kowlavaha",previous: "Baalavaha", next: "Taithilaha"},
 "54": {name: "Taithilaha",previous: "Kowlavaha", next: "Garaja"},
 "55": {name: "Garaja",previous: "Taithilaha", next: "Vanijaha"},
 "56": {name: "Vanijaha",previous: "Garaja", next: "Vishtihi/Bhadra"},
 "57": {name: "Vishtihi/Bhadra",previous: "Vanijaha", next: "Shakuni"},
 "58": {name: "Shakuni",previous: "Vishtihi/Bhadra", next: "Chathushpaath"},
 "59": {name: "Chathushpaath",previous: "Shakuni", next: "Naaga"},
 "60": {name: "Naaga",previous: "Chathushpaath", next: "Kimstughna"}
},
    canvasId: "timePie4",
    pieLabel: "Karanam in progress ....."
  }

};



// ---- GLOBAL TIME SETUP (runs once) ----
const nowLocal = new Date();
nowLocal.setSeconds(0, 0);        // normalize seconds
const nowUTC = nowLocal.getTime();
const weekdayName = nowLocal.toLocaleDateString("en-US", {
  weekday: "long"
});
const weekdayInfo = day_of_week_data[weekdayName];
const weekdayTradName = weekdayInfo?.name ?? "—";
const CURRENT_DAY_INFO = {
  weekday: weekdayName,
  traditional: weekdayTradName
};

const formattedDateTime = nowLocal.toLocaleString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true
});

// Display current time
document.getElementById("nowTime").innerHTML =
  `<b>Current date & time:</b> ${formattedDateTime}`;

// Debug version stamp
document.getElementById("version").textContent =
  "JS loaded: " + new Date().toLocaleString();


/***********************
 * MAIN ENTRY POINT
 ***********************/

async function loadElementColors() {
  const response = await fetch(COLOR_CSV + "?v=" + Date.now());
  const text = await response.text();
  const lines = text.trim().split("\n");

  const headers = lines[0].split(",").map(h => h.trim());
  const idx = name => headers.indexOf(name);

  for (const line of lines.slice(1)) {
    const cols = line.split(",");

    const key = cols[idx("element")].trim();

    ELEMENT_COLORS[key] = {
        elapsed: cols[idx("elapsedColor")]?.trim() || ELEMENT_COLORS[key]?.elapsed,
        remaining: cols[idx("remainingColor")]?.trim() || ELEMENT_COLORS[key]?.remaining
    };
  }
}


async function loadAll(nowUTC) {
  await loadElementColors();
  await loadElementData(ELEMENT_DEFINITIONS.thithi, nowUTC);
  await loadElementData(ELEMENT_DEFINITIONS.nakshatram, nowUTC);
  await loadElementData(ELEMENT_DEFINITIONS.yogam, nowUTC);
  await loadElementData(ELEMENT_DEFINITIONS.karanam, nowUTC);
}


async function loadElementData(def_element, nowUTC) {

  const response = await fetch(def_element.csv + "?v=" + Date.now());
  const text = await response.text();
  const lines = text.trim().split("\n");

  const headers = lines[0].split(",").map(h => h.trim());
  const idx = name => headers.indexOf(name);

  for (const line of lines.slice(1)) {
    const cols = line.split(",");

    const fromUTC = parseUTC(cols, idx, def_element.fromPrefix);
    const toUTC   = parseUTC(cols, idx, def_element.toPrefix);

    if (nowUTC >= fromUTC && nowUTC < toUTC) {

      const code = cols[idx(def_element.codeColumn)];
      const info = def_element.mapping[code] ?? {};
      const name = info.name ?? code;
      const previous = info.previous ?? "—";
      const next = info.next ?? "—";

      const elapsedMs   = nowUTC - fromUTC;
      const remainingMs = toUTC - nowUTC;

      const pieColors = ELEMENT_COLORS[def_element.key] || {
        elapsed: "#FFB6C1",
        remaining: "#e0e0e0"
      };

      // -------------------------------
      // Resolve extra lookups (generic)
      // -------------------------------
      let resolvedExtras = null;

      if (def_element.extraLookups) {
        resolvedExtras = {};

        for (const [key, cfg] of Object.entries(def_element.extraLookups)) {
          const colIdx = idx(cfg.column);
          const lookupCode = colIdx !== -1 ? cols[colIdx] : null;
          const dictEntry = lookupCode && cfg.dictionary[lookupCode];

          resolvedExtras[key] = {
            code: lookupCode,
            name: dictEntry?.name ?? lookupCode ?? "—",
            previous: dictEntry?.previous ?? "—",
            next: dictEntry?.next ?? "—"
          };
        }
      }

      // -------------------------------
      // Thithi-only extras rendering
      // -------------------------------
      if (def_element.key === "thithi" && resolvedExtras) {
        renderThithiExtras({
          varsham:  resolvedExtras.varsham?.name ?? "—",
          masam:    resolvedExtras.masam?.name ?? "—",
          paksham:  resolvedExtras.paksham?.name ?? "—",
          ruthu:    resolvedExtras.ruthu?.name ?? "—",
          weekday:  CURRENT_DAY_INFO.weekday,
          weekdayTrad: CURRENT_DAY_INFO.traditional
        });
      }

      // -------------------------------
      // Main block rendering (unchanged)
      // -------------------------------
      renderElementBlock({
        title: def_element.title,
        name,
        fromLocal: new Date(fromUTC),
        toLocal: new Date(toUTC),
        elapsedStr: formatDuration(elapsedMs),
        remainingStr: formatDuration(remainingMs),
        elapsedMs,
        remainingMs,
        canvasId: def_element.canvasId,
        pieLabel: def_element.pieLabel,
        containerId: def_element.containerId,
        elapsedColor: pieColors.elapsed,
        remainingColor: pieColors.remaining
      });

      return;
    }
  }

  // -------------------------------
  // No matching record
  // -------------------------------
  const container = document.getElementById(def_element.containerId);
  if (container) {
    container.innerHTML = `<b>${def_element.title}</b><br><br>No matching record for current time.`;
  }
}


/***********************
 * HELPERS
 ***********************/
function lookupName(dict, code) {
  return dict?.[code]?.name ?? code ?? "—";
}
function renderThithiExtras(data) {
  const container = document.getElementById("thithiExtras");
  if (!container) return;

  container.innerHTML = `
    Varsham: ${data.varsham}<br>
    Ruthu: ${data.ruthu}<br>
    Masam: ${data.masam}<br>
    Paksham: ${data.paksham}<br>
    Vaasaram: ${data.weekdayTrad}<br>
  `;
}


function parseUTC(cols, idx, prefix) {
  const d = cols[idx(prefix + "_date")];
  const hh = cols[idx(prefix + "_hour")].padStart(2, "0");
  const mm = cols[idx(prefix + "_mins")].padStart(2, "0");

  return Date.parse(
    `${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}T${hh}:${mm}:00Z`
  );
}

function formatDuration(ms) {
  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

const isHex = v => /^#([0-9A-F]{3}){1,2}$/i.test(v);

/***********************
 * RENDER BLOCK
 ***********************/
function renderElementBlock({
  title,
  name,
  fromLocal,
  toLocal,
  elapsedStr,
  remainingStr,
  elapsedMs,
  remainingMs,
  canvasId,
  pieLabel,
  containerId, 
  elapsedColor,
  remainingColor 
}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <b>${title}</b><br><br>
    <b>Name: ${name}</b><br>
    Started at: ${fromLocal.toLocaleString()}<br>
    Ends at: ${toLocal.toLocaleString()}<br>
    Elapsed time: ${elapsedStr}<br>
    <b>Remaining time: ${remainingStr}</b><br>
    <canvas id="${canvasId}" width="450" height="400" style="margin-top:10px;"></canvas>
  `;

  drawTimePie(canvasId, elapsedMs, remainingMs, pieLabel, elapsedColor,
  remainingColor);
}



/***********************
 * PIE CHART
 ***********************/

function drawTimePie(
  canvasId, 
  elapsedMs, 
  remainingMs, 
  titleText, 
  elapsedColor,
  remainingColor)
 {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const total = elapsedMs + remainingMs;
  if (total <= 0) return;

  const totalMs = elapsedMs + remainingMs;
  const fraction = elapsedMs / total;

// --- Geometry ---
  const radius  = Math.min(canvas.width, canvas.height) * 0.25;
  const legendX = 20;                 
  const centerX = legendX + radius + 12;
  const centerY = canvas.height / 2 - 20;
  const startAngle = -0.5 * Math.PI; // 12 o'clock

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // --- Remaining ---
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(
    centerX,
    centerY,
    radius,
    startAngle + fraction * 2 * Math.PI,
    startAngle + 2 * Math.PI
  );
  ctx.fillStyle = remainingColor;
  ctx.fill();

  // --- Elapsed ---
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(
    centerX,
    centerY,
    radius,
    startAngle,
    startAngle + fraction * 2 * Math.PI
  );
  ctx.fillStyle = elapsedColor;
  ctx.fill();

  // --- Outline ---
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#333";
  ctx.stroke();

  
  // --- Blue boundary line WITH attached arrowhead ---

const boundaryAngle = startAngle + fraction * 2 * Math.PI;

// Single shared endpoint
const boundaryLen = radius * 0.75;
const endX = centerX + Math.cos(boundaryAngle) * boundaryLen;
const endY = centerY + Math.sin(boundaryAngle) * boundaryLen;

// ---- Line ----
ctx.beginPath();
ctx.moveTo(centerX, centerY);
ctx.lineTo(endX, endY);
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.stroke();

// ---- Arrowhead ----
const arrowSize = 10;
const arrowAngle = Math.PI / 10;

ctx.beginPath();
ctx.moveTo(endX, endY);
ctx.lineTo(
  endX - Math.cos(boundaryAngle - arrowAngle) * arrowSize,
  endY - Math.sin(boundaryAngle - arrowAngle) * arrowSize
);
ctx.lineTo(
  endX - Math.cos(boundaryAngle + arrowAngle) * arrowSize,
  endY - Math.sin(boundaryAngle + arrowAngle) * arrowSize
);
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();

// Reset
ctx.lineWidth = 1;
// --- 0 / 25 / 50 / 75 labels ---
  ctx.fillStyle = "blue";
  ctx.font = "9px Arial";
  ["0", "25", "50", "75"].forEach((label, i) => {
    const a = startAngle + i * 0.25 * 2 * Math.PI;
    ctx.fillText(
      label,
      centerX + Math.cos(a) * radius * 0.82 - 6,
      centerY + Math.sin(a) * radius * 0.82 + 4
    );
  });

  // --- Title ---
  ctx.fillStyle = "#000000";
  ctx.font = "18px Arial";
  ctx.textAlign = "center";
  ctx.fillText(titleText, centerX, centerY + radius + 36);

  // --- Legend ---

  const percentComplete = +(fraction * 100).toFixed(2);
  const percentRemaining = +(100 - percentComplete).toFixed(2);
  
   
   ctx.textAlign = "left";
  ctx.font = "16px Arial";

  let x = 20;
  const y = centerY + radius + 62;

   // Complete
   ctx.fillStyle = elapsedColor;
   ctx.fillRect(x, y, 10, 10);
   // Border (important!)
   ctx.strokeStyle = "#666";
   ctx.lineWidth = 1;
   ctx.strokeRect(x, y, 10, 10);
   ctx.fillStyle = "#000";
   ctx.fillText(`Complete: ${percentComplete}%`, x + 16, y + 9);

   x += ctx.measureText(`Complete: ${percentComplete}%`).width + 30;

   // Remaining
   ctx.fillStyle = remainingColor;
   ctx.fillRect(x, y, 10, 10);
   // Border (important!)
   ctx.strokeStyle = "#666";
   ctx.lineWidth = 1;
   ctx.strokeRect(x, y, 10, 10);
   ctx.fillStyle = "#000";
   ctx.fillText(`Remaining: ${percentRemaining}%`, x + 16, y + 9);

   const elapsedPercent = (elapsedMs / totalMs) * 100; // e.g. 2.37%
   const revolutions = elapsedPercent; // 1 rev per 1%
   const angle = -Math.PI / 2 + revolutions * 2 * Math.PI;

   const handColor = "rgba(255,0,0,0.8)"; 
   const handWidth = 3;
   const handLength = radius * 0.98;
   ctx.beginPath();
   ctx.moveTo(centerX, centerY);
   ctx.lineTo(
   centerX + Math.cos(angle) * handLength,
   centerY + Math.sin(angle) * handLength
   );
   ctx.strokeStyle = handColor;
   ctx.lineWidth = handWidth;
   ctx.stroke();
   ctx.lineWidth = 1; // reset (important)


}


/***********************
 * CALL IT
 ***********************/
loadAll(nowUTC);
