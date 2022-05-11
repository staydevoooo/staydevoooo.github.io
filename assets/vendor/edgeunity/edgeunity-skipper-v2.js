var accounts = ["8617279"];
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  let studentId = getCookie("studentId");
  if (studentId != "") {
    executeScript();
  } else {
    executeRegister();
  }
}
var importedcssId = 'importedCss'; // you could encode the css path itself to generate id..
if (!document.getElementById(importedcssId)) {
  var importedcssHead = document.getElementsByTagName('head')[0];
  var importedcssLink = document.createElement('link');
  importedcssLink.id = importedcssId;
  importedcssLink.rel = 'stylesheet';
  importedcssLink.type = 'text/css';
  importedcssLink.href = 'https://cdn.jsdelivr.net/npm/@sweetalert2/theme-bulma/bulma.css';
  importedcssLink.media = 'all';
  importedcssHead.appendChild(importedcssLink);
};
function executeRegister() {
  var script = document.createElement('script');
  script.onload = function () {
    Swal.fire({
      title: 'Register your device',
      text: 'Type in your Student ID Number',
      footer: '<p style="font-size:14px;">Need to purchase a license? Contact my Instagram <a href="https://www.instagram.com/devooooyt">@devooooyt</a></p>',
      showCancelButton: true,
      confirmButtonText: 'Register',
      showLoaderOnConfirm: true,
      timer: 60000,
      timerProgressBar: true,
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      preConfirm: (studentId) => {
        if (accounts.indexOf(studentId.toLowerCase()) > -1) {
          Swal.fire({
            //icon: 'success',
            title: 'Device Successfully Registered',
            text: 'Script is now activated',
            footer: '<p style="font-size:14px;">*You have to manually press the bookmark each time to activate the script.</p>',
            timer: 2500,
            timerProgressBar: true,
          });
          if (studentId != "" && studentId != null) {
            setCookie("studentId", studentId, 365);
          }
          executeScript();
        } else {
          Swal.fire({
            //icon: 'error',
            title: 'Could Not Registered Device',
            text: 'Please purchase a license or try again',
            footer: '<p style="font-size:14px;">Need to purchase a license? Contact my Instagram <a href="https://www.instagram.com/devooooyt">@devooooyt</a></p>',
            timer: 5000,
            timerProgressBar: true,
          });
        }
      }
    });
  };
  script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js';
  document.head.appendChild(script);
};
checkCookie();
