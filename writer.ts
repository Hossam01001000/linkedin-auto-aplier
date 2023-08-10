const fs = require('fs');
const wf = async(ob:object, file:string)=>{
    const jsonData = JSON.stringify(ob);
    fs.writeFile(`data/rock/${file}.json`, jsonData, (err:any) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file has been written successfully.');
      }
    });
    
}
export{wf}