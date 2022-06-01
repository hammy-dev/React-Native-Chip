import {
  StyleSheet,
} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: Colors.white },
  circleContainer: {
    flex: 0.2, backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '40%',
  },
  circleOne: {
    backgroundColor: Colors.uploadDocsCircleText, alignSelf: 'center', borderColor: Colors.uploadDocsCircleText, borderWidth: 1,
  },
  circleTwo: {
    backgroundColor: Colors.white, alignSelf: 'center', borderColor: Colors.grey, borderWidth: 1,
  },
  circleThree: {
    backgroundColor: Colors.white, alignSelf: 'center', borderColor: Colors.grey, borderWidth: 1,
  },
  lineOne: {
    alignSelf: 'center', width: '20%', height: 1, alignItems: 'center', backgroundColor: Colors.UploadDocsCircleThree,
  },
  lineTwo: {
    alignSelf: 'center', width: '20%', height: 1, alignItems: 'center', backgroundColor: Colors.UploadDocsCircleThree,
  },
  circleTextContainer: {
    flex: 0.1, backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', marginTop: '-3%',
  },
  circleTextOne: { fontSize: 15, color: Colors.circle },
  circleTextTwo: { fontSize: 15, marginRight: '2%', color: Colors.darkgrey },
  circleTextThree: { fontSize: 15, color: Colors.darkgrey },
  cardMainContainer: {
    flex: 0.9, backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
  cardContainer: {
    width: '80%', height: '70%', backgroundColor: Colors.uploadDocsCardtext, borderWidth: 1, borderRadius: 15, borderColor: Colors.uploadDocsCardtext,
  },
  insideCardCircle: {
    backgroundColor: Colors.white, padding: 30, alignSelf: 'center', overflow: 'hidden', width: 170, height: 170, borderRadius: 170 / 2, marginTop: '-25%',
  },
  insideCardTextContainerOne: {
    flex: 0.3, backgroundColor: Colors.uploadDocsCardtext, marginTop: '9%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
  insideCardTextOne: { fontSize: 17, textAlign: 'center' },
  insideCardTextContainerTwo: {
    flex: 0.2, backgroundColor: Colors.uploadDocsCardtext, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '-3%',
  },
  insideCardTextTwo: { fontSize: 17 },
  insideCardChipButtonContainer: {
    flex: 0.5, backgroundColor: Colors.uploadDocsCardtext, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
  },
  insideCardChipButton: {
    backgroundColor: Colors.InstructionButton, width: 180, height: 60, justifyContent: 'center',
  },
  insideChipButtonText: { fontSize: 20, color: Colors.white },
  title: { color: Colors.grey, fontSize: 20 },
  modal: { margin: 0, backgroundColor: Colors.transparent },
  modalView: {
    height: '30%',
    marginTop: 'auto',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  modalClose: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  home: { width: 30, height: 30 },
  chooseImg: { fontSize: 20, alignSelf: 'center' },
  circletext: { color: Colors.white, fontSize: 20 },
  modalContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 },
  cameraView: { overflow: 'hidden', width: 100, height: 100 },
  cameraImg: { width: '100%', height: '100%' },
  cameraText: { alignSelf: 'center' },
  galleryView: { overflow: 'hidden', width: 90, height: 90 },
  galleryImg: { width: '100%', height: '100%' },
  galleryText: { alignSelf: 'center', marginTop: 11 },
});
