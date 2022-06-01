import BankCard from '../../screens/DrawerScreens/Bank&Cards';
import MyQRCode from '../../screens/DrawerScreens/MyQRCode';
import CompletePayment from '../../screens/DrawerScreens/CompletePayment';
import MarchantTopUP from '../../screens/DrawerScreens/MarchantTop-Up';
import CashOut from '../../screens/DrawerScreens/CastOutHistory';
import PendingRequest from '../../screens/DrawerScreens/PendingRequest';
import Settings from '../../screens/DrawerScreens/Settings';
import Help from '../../screens/DrawerScreens/Help';
// import Selec
// tedPayment from
// '../../screens/DrawerScreens/DeleteAccountFeedback/selectedPaymentScreen';
// images
import qrcode from '../../assets/drawericon/qr-code.png';
import payments from '../../assets/drawericon/payments.png';
import popup from '../../assets/drawericon/merchants1.png';
import cashout from '../../assets/drawericon/cash.png';
import bankcard from '../../assets/drawericon/card.png';
import pendingRequest from '../../assets/drawericon/pending.png';
import settings from '../../assets/drawericon/settings.png';
import help from '../../assets/drawericon/help.png';

export default [
  { name: 'MY QR CODE', Component: MyQRCode, uri: qrcode },
  { name: 'COMPLETED PAYMENTS', Component: CompletePayment, uri: payments },
  { name: 'MERCHANT & TOP-UP LIST', Component: MarchantTopUP, uri: popup },
  { name: 'CASH OUT HISTORY', Component: CashOut, uri: cashout },
  { name: 'BANKS & CARDS', Component: BankCard, uri: bankcard },
  { name: 'PENDING REQUESTS', Component: PendingRequest, uri: pendingRequest },
  { name: 'SETTINGS', Component: Settings, uri: settings },
  { name: 'HELP', Component: Help, uri: help },

];
