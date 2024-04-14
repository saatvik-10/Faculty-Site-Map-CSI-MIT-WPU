import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, ThemeProvider } from "@mui/material";
import img from "../../../images1/chair1.svg";



export function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#007FFF",
            dark: "#0066CC",
          },
        },
      }}
    >
      <div style={{ display: "flex" }}>
        <Box
          sx={{
            width: "52%",
            height: "7vh",
            bgcolor: "#B99F9F",
          }}>  <div><img src={img} alt="Chair" className="mt-[22%] ml-[80%]" /></div></Box>
          
        
        
        <Box
          sx={{
            width: "15%",
            height: "18vh",
            bgcolor: "#B99F9F",
          }}
        />
        <div style={{display:"flex", alignItems:"center",flexDirection:"column",paddingTop:"5%", paddingLeft:"2%"}}>
        <img src={img} alt="Chair"  />
        <img src={img} alt="Chair"  />
        </div>
      </div>
    </ThemeProvider>
  );
}

export function BoxSx1() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#007FFF",
            dark: "#0066CC",
          },
        },
      }}
    >
      <div style={{ display: "flex" }}>
        <Box
          sx={{
            width: 250,
            height: 130,
            bgcolor: "#B99F9F",
          }}
        />
      </div>
    </ThemeProvider>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "20vh",
  boxShadow: "none",
}));

const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "40vh",
  boxShadow: "none",
}));

export default function BasicGrid() {
  return (
    <>
      <Box
        sx={{ flexGrow: 1, paddingLeft: "14%", paddingRight: "16%",marginTop: "8%" }}
        style={{ width: "100vw" }}
      >
        <Grid container spacing={0}>
          <Grid item xs={5.7} sx={{ margin: 0 }}>
            <Item>
              <BoxSx />
            </Item>
          </Grid>
          <Grid item xs={0.1}>
            <Item>
              <BoxSx1 />
            </Item>
          </Grid>
          <Grid item xs={6.2}>
            <Item sx={{ display: "flex", flexDirection: "row-reverse" }}>
              <Box sx={{ width: "52%", height: "7vh", bgcolor: "#B99F9F" }}>
              <div className="mt-[22%] ml-[8%]"> <img src={img} alt="Chair"  /></div></Box>
           
              
              <Box sx={{ width: "14%", height:"18vh", bgcolor: "#B99F9F" }}></Box>

              <div style={{display:"flex", alignItems:"center",flexDirection:"column",paddingTop:"5%", paddingRight:"3%"}}>
        <img src={img} alt="Chair"  />
        <img src={img} alt="Chair"  />
        </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{ flexGrow: 1, paddingLeft: "14%", paddingRight: "16%", paddingTop: "2.5%"}}
        style={{ width: "100vw" }}
      >
        <Grid container spacing={0}>
          <Grid item xs={6} sx={{ margin: 0, paddingRight: "5%",}}>
            <Item1>
              <Box
                sx={{
                  border: "solid black",
                  borderWidth: 1,
                  borderRadius: 0,
                  paddingBottom: "2%",
                }}
              >
                <Box sx={{ width: "15%", height: "12vh", bgcolor: "#B99F9F" }}>
                  <div><img src={img} alt="Chair" className="ml-[330%]" style={{paddingTop:"20%"}}/></div>
                </Box>
                <Box
                  sx={{ width: "100%", height: "8vh", bgcolor: "#B99F9F" }}
                ></Box>
                <div style={{display:"flex", paddingLeft:"40%", gap:"20%"}}><img src={img} alt="Chair" /><img src={img} alt="Chair" /></div>
              </Box>

              <Box
                sx={{
                  border: "solid black",
                  borderWidth: 1,
                  borderRadius: 0,
                  borderBottom:'none',
                  display: "flex",
                  flexDirection: "row-reverse",
                  transform: "rotate(180deg)",
                  paddingBottom:"12%",
                }}
              >
                <Box sx={{ width: "56%", height: "7vh", bgcolor: "#B99F9F" }}>
                  <div style={{paddingTop:"25%", paddingLeft:"12%"}}> <img src={img} alt="Chair"  style={{transform:"rotate(180deg)"}} /></div>
                </Box>
                <Box
                  sx={{ width: "16%", height: "19vh", bgcolor: "#B99F9F" }}
                ></Box>
                <div style={{paddingRight:"4%", paddingTop:"4%"}} ><img src={img} alt="Chair" style={{transform:"rotate(180deg"}} /><img src={img} alt="Chair" style={{transform:"rotate(180deg"}} /></div>
              </Box>
            </Item1>
          </Grid>

          <Grid item xs={6} sx={{ paddingLeft: "3%" }}>
  <Item1 sx={{ display: "flex", flexDirection: "row-reverse", border: "1px solid black", borderWidth: 1, borderRadius: 0, height: "37vh", paddingBottom: "15%" }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
      <Box sx={{ width: "28%", height: "50vh", bgcolor: "#B99F9F" }}></Box>

      <Box sx={{ width: 280, height: "20vh", bgcolor: "#B99F9F", position: 'relative' }}>
        <div className="mb-4" style={{ padding: '0', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' ,paddingBottom:'50%', paddingRight:"30%"}}>
          <img src={img} alt="Chair" />
        </div>
      </Box>

      <div style={{ position: 'relative', paddingRight: '65%', paddingLeft: '35%', top: '-20vh', zIndex: '1' }}>
        <img src={img} alt="Chair" style={{ position: 'absolute', left: '0', top: '0', paddingTop:"45%", paddingLeft:"16%" }} />
        <img src={img} alt="Chair" style={{ position: 'absolute', left: '50%', top: '0', transform: 'translateX(-50%)', paddingTop:'45%' }} />
      </div>
    </Box>
  </Item1>
</Grid>

        </Grid>
      </Box>
    </>
  );
}

