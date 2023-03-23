export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  console.log(navigator,"****")

  //verifica daca are proprietatea serviceworker in navigator 
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.log("===");
    console.warn("response", response);

    // return response.pushManager.getSubscription().then(function (subscription) {
    //   response.pushManager.subscribe({
    //     userVisibleOnly: true,
    //     // applicationServerKey: determineAppServerKey(),
    //   });
    // });
  });
}
