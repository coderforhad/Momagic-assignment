/* Initial Steps /*

// Browser has some issues in CSRF to restricted api url
// i am sending header and others info but this issues is not solved because of browser.
// using Mod Header chrome extensions we can solve this issues 
// if we use actual origin then it will fine no need to use Mod Header

.env file
//use origin url

 <!-- // const [accessToken, setAccessToken] = useState()
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch("https://api.webmanza.com/auth/v2/get-access-token", {
  //       headers: { "Origin": "bookshop.webmanza.com" },
  //       method: "post"
  //     })
  //     const result = await response.json()
  //     setAccessToken(result.access_token)
  //   }
  //   getData()
  // }, [])
  // console.log(accessToken)
  // useEffect(() => {
  //   const getthemeData = async () => {
  //     const response = await fetch("https://api.webmanza.com/general/v2/store-info", {
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`,
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         "Origin": "bookshop.webmanza.com"
  //       },
  //     })
  //     const themeData = await response.json()
  //     console.log(themeData)
  //   }
  //   getthemeData()
  // }, [accessToken]) -->