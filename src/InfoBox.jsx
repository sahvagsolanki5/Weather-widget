import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


 export default function InfoBox( {info} ) {
    const INIT_URL = 
   " https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
   const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070";
   const COLD_URL = 
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000";
   const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1667516468789-81a6ba214724?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169";

    return (
       <div className="InfoBox">
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
        sx={{ height: 140 }} 

    image = {      
        info.temp <= 15 ? COLD_URL : info.temp <= 25 ? INIT_URL : HOT_URL
      } 

   title="green iguana" />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">

    {info.city}  {
      info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ?< SunnyIcon /> : < AcUnitIcon/>
    }

        </Typography>
        <Typography variant="body2" color= "text.secondary" component={"span"}>
         <p> Temperature = {info.temp}&deg;C </p>
         <p> Humidity = {info.humidity}% </p>
         <p> Min Temp = {info.tempMin}&deg;C </p>
         <p> Max Temp = {info.tempMax}&deg;C </p>
         <p> The weather can be described as <i> {info.weather} </i> and  feels like {info.feelslike}&deg;C </p>
      </Typography>
      </CardContent>
    </Card>
    </div>

  </div>
 )
}