import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import * as USER_HELPERS from "./utils/userToken";
//Pages
import HomePage from "./pages/HomePage";
import LogIn from "./pages/auth/LogIn";
import Signup from "./pages/auth/Signup";
import Campaigns from "./pages/Campaigns";
import Countries from "./pages/Countries";
import Container from '@mui/material/Container';
import Favorites from "./pages/Favorites";
import Copyright from "./components/Copyright";
import Achievements from "./pages/Achievements";
import CommunityPhotos from "./pages/CommunityPhotos";

//Theme imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

//Theme variables
 const light = {
  palette: {
    mode: "light",
    primary: {
      main: '#66783E',
    },
    secondary: {
      main: '#D69301',
    },
    text: {
      primary: '#121212',
      secondary: '#3f3f3f',
      disabled: '#646364',
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3.5rem',

      fontFamily: 'Jua',
    },
    h3: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
    ].join(','),
  },
};
 const dark = {
  palette: {
    mode: "dark",
    primary: {
      main: '#D9CB04',
    },
    secondary: {
      main: '#42A0BC',
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 500,
      fontFamily: 'Cabin Sketch',
    },
    h3: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
    ].join(','),
  },
};

export default function App() {
  const [theme, setTheme] = useState(true);
  const icon = !theme ? <Brightness7Icon /> : <Brightness4Icon />;
  const appliedTheme = createTheme(theme ? light : dark);

  //User authentication
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">

      <ThemeProvider theme={appliedTheme}>
        <CssBaseline >
        
        <Navbar handleLogout={handleLogout} user={user} />
        <div className="theme-button">
        <IconButton sx={{ ml: 1 }} onClick={() => setTheme(!theme)} color="inherit">
          {icon}
        </IconButton>
        </div>
        <Container maxWidth="lg">
          
          <Routes>
          {/*{routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
          ))}*/}

            <Route path="/" element={<HomePage />} />
            <Route path="/countries" element={<Countries />}/>
            <Route path="/campaigns" element={<Campaigns />}/>
            <Route path="/community" element={<CommunityPhotos />}/>
            <Route path="/achievements" element={<Achievements />}/>
            {/*User Routes*/}
            <Route path="/favorites" element={<Favorites />}/>
            {/*Authentication routes*/}
            <Route path="/auth/login" element={<LogIn />}/>
            <Route path="/auth/signup" element={<Signup />}/>
        </Routes>
        <Copyright />
      </Container>
      </CssBaseline >
      </ThemeProvider>
      
    </div>
  );
}

