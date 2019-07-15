import React,{ useState, useEffect } from 'react';
import Hinh from '../../components/hinh';
import Footer from '../../components/footerhinh';
import { gethinh } from '../../api/hinh';

function Khunghinh() {
    const [hinh, sethinh] = useState('');
    const [share, setshare] = useState('');
  
    useEffect(() => {
      gethinh('abc').then(m => {
        sethinh(m.image);
        setshare(m.share);
      });
    })
  return (
    <div>
      <Hinh image={hinh}/>
      <Footer link={share}/>
    </div>
  );
}

export default Khunghinh;
