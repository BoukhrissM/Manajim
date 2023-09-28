import { Grid } from "@mui/material";

export const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <Grid container spacing={2} className="container h-20">
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="bg-indigo-400 flex justify-start px-2 items-center"
        >
          item
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="bg-indigo-500 flex flex-col justify-end px-2 items-center"
        >
          
          
          
          
          
        </Grid>
      </Grid>
    </div>
  );
};
