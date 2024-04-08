import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  VUs: 200,
  duration: '30s',
};

export default function() {
   http.get('http://<IP_ADDRESS>/');
   sleep(1);
}

