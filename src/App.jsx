import React from 'react';

function App() {
  React.useEffect(() => {
    redirectToAppStore();
  }, []);

  const redirectToAppStore = () => {
    if (isIOS()) {
      window.location.href = 'https://apps.apple.com/us/app/lifelight/id6504420172';
    } else if (isAndroid()) {
      window.location.href = 'https://play.google.com/store/apps/details?id=org.lifelight.festivals';
    }
  };

  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  };

  const isAndroid = () => {
    return /Android/.test(navigator.userAgent);
  };

  return (
    <div className='flex w-screen justify-center h-screen items-center gap-20'>
      <div><a href='https://play.google.com/store/apps/details?id=org.lifelight.festivals'><img src='Android.png' /></a></div>
      <div><a href='https://apps.apple.com/us/app/lifelight/id6504420172'><img src='IOS.png' /></a></div>
    </div>
  );
}

export default App;