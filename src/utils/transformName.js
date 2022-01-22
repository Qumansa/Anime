const transformName = (name) => {
    switch (name) {
        case 'Chihiro Ogino':
            return 'Chihiro';
        case 'Lusheeta Toel Ul Laputa':
            return 'Sheeta';
        default:
            return name;
    };
};

export default transformName;