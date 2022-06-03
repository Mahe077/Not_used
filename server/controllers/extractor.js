// export const getAcc = async (req, res) => {
// 	var pythonScript = "./scripts/account-extractor.py";
// 	var pythonExecutable = "python.exe";

// 	const spawn = require('child_process').spawn;

// 	const scriptExecution = spawn("python.exe", [pythonScript, req.body]);

// 	var uint8arrayToString = function(data){
// 		    return String.fromCharCode.apply(null, data);
// 		};

// 	// Handle normal output
// 	scriptExecution.stdout.on('data', (data) => {
// 	    let temp = uint8arrayToString(data);
// 	    let j = JSON.parse(temp) // return a JSON object
// 	    // console.log(j.username + " \naddress :" + j.account.address)
// 	    res.send(j)
// 	    // console.log(String.fromCharCode.apply(null, data));
// 	});

// 	// Handle error output
// 	scriptExecution.stderr.on('data', (data) => {
// 	    // As said before, convert the Uint8Array to a readable string.
// 	    console.log(uint8arrayToString(data));
	    
// 	});

// 	scriptExecution.on('exit', (code) => {
// 	    console.log("Process quit with code : " + code);
// 	});
// }

