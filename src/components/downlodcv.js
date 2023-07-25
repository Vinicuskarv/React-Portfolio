import React from 'react';
import importPdf from '../components/icons/icons8-import-pdf-50.png'

const DownloadButton = () => {
  const handleDownload = () => {
    const cvUrl = 'https://github.com/Vinicuskarv/CVvini/blob/main/vinicius%2B(2).pdf';

    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.setAttribute('download', 'seu_curriculo.pdf');
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={handleDownload} className='importButtonPdf' style={styles.importButtonPdf}>
      <img src={importPdf} style={styles.importPdfImg}/>
    </button>
  );
};
const styles ={
  importButtonPdf:{
    borderRadius: '20px',
    border: 'none',
    width: '50px',
    height: '50px',
    marginLeft:'10px',
  },
  importPdfImg:{
    width: '25px',
  }
}

export default DownloadButton;

