// import express from 'express';
import fs from 'fs/promises';
import { Products } from './claseProductos';



const product = new Products();
product.read();
product.save('TV', 28000, 'https://th.bing.com/th/id/OIP.wc_AcGs1gJ9kcfOTetHjNgHaHa?pid=ImgDet&rs=1');
product.save('Laptop', 64500, 'https://th.bing.com/th/id/OIP.y0yjKeyE-qE0URV8t1qCZAHaEo?pid=ImgDet&rs=1');
product.save('Smartphone', 47300, 'https://th.bing.com/th/id/OIP.QGNUJBEED2Yq_vAkVrf88gHaFe?pid=ImgDet&rs=1');