/**
 * helpers.js
 */

import numeral from 'numeral';

// Format Price for MXN
export function formatPrice(value) {
  return `${numeral(value).format('$0,0.00')} MXN`;
}

// Create Cookie
export function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } else {
    expires = '';
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

// Read Cookie
export function readCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Erase Cookie
export function eraseCookie(name) {
  createCookie(name, '', -1);
}

// Get UTM Parameters
export function getUTMParameters() {
  //  Get All URL Params
  var urlParams = getAllUrlParams();

  // Predefined UTMS, add current value or default
  var obj = {
    utm_source: JSON.parse(readCookie('szka_utm_source')) || 'undefined',
    utm_medium: JSON.parse(readCookie('szka_utm_medium')) || 'undefined',
    utm_campaign: JSON.parse(readCookie('szka_utm_campaign')) || 'undefined',
    utm_other: JSON.parse(readCookie('szka_utm_other')) || []
  }

  // Check if if url is empty
  if (Object.keys(urlParams).length === 0 && urlParams.constructor === Object) {
    return obj;
  }

  // Parse properties which start with utm
  for (var property in urlParams) {
    if (urlParams.hasOwnProperty(property) && property.startsWith('utm')) {
      if (hasOwnProperty.call(obj, property)) {
        obj[property] = urlParams[property];
      } else {
        obj['utm_other'].push(`${String(property)}: ${String(urlParams[property])}\n`);
      }
    }
  }

  // Update Cookies
  createCookie('szka_utm_source', JSON.stringify(obj['utm_source']), 30);
  createCookie('szka_utm_medium', JSON.stringify(obj['utm_medium']), 30);
  createCookie('szka_utm_campaign', JSON.stringify(obj['utm_campaign']), 30);
  createCookie('szka_utm_other', JSON.stringify(obj['utm_other']), 30);

  return true;
}

// Get all URL Parameters
export function getAllUrlParams(url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj = {};

  if (!queryString) {
    return obj;
  }

  queryString = queryString.split('#')[0];

  var arr = queryString.split('&');

  for (var i = 0; i < arr.length; i++) {
    var a = arr[i].split('=');
    var paramNum = undefined;
    var paramName = a[0].replace(/\[\d*\]/, v => {
      paramNum = v.slice(1, -1);
      return '';
    });

    var paramValue = (typeof(a[1]) === 'undefined') ? true : a[1];

    paramName = paramName.toLowerCase();
    paramValue = paramValue.toLowerCase();

    if (obj[paramName]) {
      if (typeof obj[paramName] === 'string') {
        obj[paramName] = [obj[paramName]];
      }
      if (typeof paramNum === 'undefined') {
        obj[paramName].push(paramValue);
      } else {
        obj[paramName][paramNum] = paramValue;
      }
    } else {
      obj[paramName] = paramValue;
    }
  }

  return obj;
}

export function merge() {
   var args = arguments;
   var hash = {};
   var arr = [];
   for (var i = 0; i < args.length; i++) {
      for (var j = 0; j < args[i].length; j++) {
        if (hash[args[i][j]] !== true) {
          arr[arr.length] = args[i][j];
          hash[args[i][j]] = true;
        }
      }
    }
   return arr;
}

export default function index() {
  console.log('Helpers File');
}
