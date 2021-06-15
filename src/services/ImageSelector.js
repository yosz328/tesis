


export const ImageSelector = (nombre) => {
    let image = '';
    switch(nombre){
        
        case 'Jirafa':
            image = 'https://proyecto-tesis.s3.amazonaws.com/jirafa.jpg';
            break;
        case 'Leon':
            image = 'https://proyecto-tesis.s3.amazonaws.com/leon.png';
            break;
        case 'Aguila':
            image = 'https://proyecto-tesis.s3.amazonaws.com/aguila.jpg';
            break;
        default:
            break;
    }
    return image;
}