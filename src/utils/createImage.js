import chihiro from '../resources/img/characters/chihiro.jpg';
import haku from '../resources/img/characters/haku.jpg';
import jiji from '../resources/img/characters/jiji.jpg';
import san from '../resources/img/characters/san.jpg';
import sheeta from '../resources/img/characters/sheeta.jpg';
import totoro from '../resources/img/characters/totoro.jpg';

const createImage = (name) => {
    switch (name) {
        case 'Chihiro Ogino':
            return chihiro;
        case 'Haku':
            return haku;
        case 'Jiji':
            return jiji;
        case 'Lusheeta Toel Ul Laputa':
            return sheeta;
        case 'San':
            return san;
        case 'Totoro':
            return totoro;
        default:
            return;
    };
};

export default createImage;