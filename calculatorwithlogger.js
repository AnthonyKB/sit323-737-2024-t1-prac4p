const express= require("express");
const res = require("express/lib/response");
const app= express();
const fs = require('fs');
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

const add= (n1,n2) => { //n1 and n2 being the two values used for the calculation
    return n1+n2;       //the values n1 will be added to n2 to produce an 'add' effect
}
app.get("/add", (req,res)=>{ //defining a router handler '/add' for HTTP GET requests
    try{
    const n1= parseFloat(req.query.n1); //converting the n1 and n2 values from a string into a number
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) { //Error thrown "n1 is incorrectly defined" when n1 is not defined
        logger.error("n1 is incorrectly defined"); 
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) { //Error thrown "n2 is incorrectly defined" when n2 is not defined
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for addition'); //Text that will be put into the combined.log document
    const result = add(n1,n2); //Creating 'result' which will be used later, it uses preexisting 'add' function in junction with n1 and n2 to create the new value
    res.status(200).json({statuscocde:200, data: result }); //displays result
    } catch(error) { //Error catching
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

const subtract= (n1,n2) => { //n1 and n2 being the two values used for the calculation
  return n1-n2;              //the values n1 will be subtracted by n2 to produce a 'subtract' effect
}
app.get("/subtract", (req,res)=>{ //defining a router handler '/subtract' for HTTP GET requests
  try{
  const n1= parseFloat(req.query.n1); //converting the n1 and n2 values from a string into a number
  const n2= parseFloat(req.query.n2);
  if(isNaN(n1)) { //Error thrown "n1 is incorrectly defined" when n1 is not defined
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
  if(isNaN(n2)) { //Error thrown "n2 is incorrectly defined" when n2 is not defined
      logger.error("n2 is incorrectly defined");
      throw new Error("n2 incorrectly defined");
  }
  
  logger.info('Parameters '+n1+' and '+n2+' received for subtraction'); //Text that will be put into the combined.log document
  const result = subtract(n1,n2); //Creating 'result' which will be used later, it uses preexisting 'subtract' function in junction with n1 and n2 to create the new value
  res.status(200).json({statuscocde:200, data: result }); //displays the result
  } catch(error) { //Error catching
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});

const divide= (n1,n2) => { //n1 and n2 being the two values used for the calculation
    return n1/n2;          //the values n1 will be divided n2 to produce an 'divide' effect
}
app.get("/divide", (req,res)=>{ //defining a router handler '/divide' for HTTP GET requests
    try{
    const n1= parseFloat(req.query.n1); //converting the n1 and n2 values from a string into a number
    const n2= parseFloat(req.query.n2);
    if(isNaN(n1)) { //Error thrown "n1 is incorrectly defined" when n1 is not defined
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) { //Error thrown "n2 is incorrectly defined" when n2 is not defined
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for division'); //Text that will be put into the combined.log document
    const result = divide(n1,n2); //Creating 'result' which will be used later, it uses preexisting 'divide' function in junction with n1 and n2 to create the new value
    res.status(200).json({statuscocde:200, data: result }); //displays the result
    } catch(error) { //Error catching
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

const multiply= (n1,n2) => { //n1 and n2 being the two values used for the calculation
  return n1*n2;              //the values n1 will times by n2 to produce an 'multiplication' effect
}
app.get("/multiply", (req,res)=>{ //defining a router handler '/multiply' for HTTP GET requests
  try{
  const n1= parseFloat(req.query.n1); //converting the n1 and n2 values from a string into a number
  const n2= parseFloat(req.query.n2);
  if(isNaN(n1)) { //Error thrown "n1 is incorrectly defined" when n1 is not defined
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
  if(isNaN(n2)) { //Error thrown "n2 is incorrectly defined" when n2 is not defined
      logger.error("n2 is incorrectly defined");
      throw new Error("n2 incorrectly defined");
  }
  
  logger.info('Parameters '+n1+' and '+n2+' received for multiplication'); //Text that will be put into the combined.log document
  const result = multiply(n1,n2); //Creating 'result' which will be used later, it uses preexisting 'multiply' function in junction with n1 and n2 to create the new value
  res.status(200).json({statuscocde:200, data: result }); //displays the result
  } catch(error) { //Error catching
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});


//TASK 4.2C OPERATIONS

const power= (n1,n2) => { //n1 and n2 being the two values used for the calculation
  return Math.pow(n1, n2);             //This is the equation that gives us the exponent value using n1 and n2 values
}
app.get("/power", (req,res)=>{ //defining a router handler '/power' for HTTP GET requests
  try{
  const n1= parseFloat(req.query.n1); //converting the n1 and n2 values from a string into a number
  const n2= parseFloat(req.query.n2);
  if(isNaN(n1)) { //Error thrown "n1 is incorrectly defined" when n1 is not defined
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
  if(isNaN(n2)) { //Error thrown "n2 is incorrectly defined" when n2 is not defined
      logger.error("n2 is incorrectly defined");
      throw new Error("n2 incorrectly defined");
  }
  
  logger.info('Parameters '+n1+' and '+n2+' received for exponentiation'); //Text that will be put into the combined.log document
  const result = power(n1,n2); //Creating 'result' which will be used later, it uses preexisting 'power' function in junction with n1 and n2 to create the new value
  res.status(200).json({statuscocde:200, data: result }); //displays the result
  } catch(error) { //Error catching
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});


//Square root function will only need n1 value to be used, as it will get the square root of a single value
//Entering an n2 value will be completely ignored, and only n1 value will be used for the calculation

const root= (n1) => { //n1 and n2 being the two values used for the calculation
  return Math.sqrt(n1);             //This is the equation that gives us the square root value using n1 value only
}
app.get("/root", (req,res)=>{ //defining a router handler '/root' for HTTP GET requests
  try{
  const n1= parseFloat(req.query.n1); //converting the n1 and n2 values from a string into a number

  if(isNaN(n1)) { //Error thrown "n1 is incorrectly defined" when n1 is not defined
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
  
  logger.info('Parameters '+n1+' received for square root'); //Text that will be put into the combined.log document
  const result = root(n1); //Creating 'result' which will be used later, it uses preexisting 'root' function in junction with n1 to create the new value
  res.status(200).json({statuscocde:200, data: result }); //displays the result
  } catch(error) { //Error catching
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});

const mod= (n1,n2) => { //n1 and n2 being the two values used for the calculation
  return n1 % n2;            //This is the equation that gives us the modulo value
}
app.get("/mod", (req,res)=>{ //defining a router handler '/mod' for HTTP GET requests
  try{
  const n1= parseFloat(req.query.n1); //converting the n1 and n2 values from a string into a number
  const n2= parseFloat(req.query.n2);
  if(isNaN(n1)) { //Error thrown "n1 is incorrectly defined" when n1 is not defined
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
  if(isNaN(n2)) { //Error thrown "n2 is incorrectly defined" when n2 is not defined
      logger.error("n2 is incorrectly defined");
      throw new Error("n2 incorrectly defined");
  }
  
  logger.info('Parameters '+n1+' and '+n2+' received for modulo'); //Text that will be put into the combined.log document
  const result = mod(n1,n2); //Creating 'result' which will be used later, it uses preexisting 'mod' function in junction with n1 and n2 to create the new value
  res.status(200).json({statuscocde:200, data: result }); //displays the result
  } catch(error) { //Error catching
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});



const port=3040; //Setting the port to 3040, this is the port we will use to view the calculations
app.listen(port,()=> { //Telling the app to start listening to the port, which is 3040
    console.log("hello i'm listening to port"+port); 
})

