import { Injectable } from '@angular/core';

@Injectable()
export class EndpointService {

  urlApi = 'https://localhost';
  DEBUG = false;//  change to "True" to develop
  BASE_API_PATH = this.urlApi;
  API = {
    ENTITY: this.urlApi + '/services/entity/',
    PRODUCT_ENGINE: this.urlApi + '/services/apexrest/ProductEngine',
    PRINT_ENGINE: this.urlApi + '/pages/action/PrintFNAReport', // updated the FNA report endpoint
    FNA_HISTORY_PDF: this.urlApi + '/pages/action/GetFNAHistoryPdf',
    FNA_REPORT: this.urlApi + '/pages/action/GetLatestFNAReport', // get FNA Report document
    FNA_HISTORY: this.urlApi + '/pages/action/GetFNAHistory', // get FNA Histories Report document
    CONTENT: this.urlApi + '/services/content/', // content get all document and video
    SYNC_CUSTOMER: this.urlApi + '/pages/action/synchronizeAll',
    SYNC_CUSTOMER_STATUS: this.urlApi + '/pages/action/synchronizeStatus',
    SEND_EMAIL_FNA_REPORT: this.urlApi + '/pages/action/SendEmailFNAReport',
    LOGIN: this.urlApi + '/pages/action/login',
    LOGOUT: this.urlApi + '/pages/action/logout',
    EMAILREPORT: this.urlApi + '/pages/action/SendSMTPFNAReport',
    PRINTREPORT: this.urlApi + '/pages/action/airprintLatestFNAReport',
    EMAILPDF: this.urlApi + '/pages/action/sendEmailFNAReport',
    PRINTPDF: this.urlApi + '/pages/action/airprintPdfDocument',
    PRINTHISTORYPDF: this.urlApi + '/pages/action/airprintFNAHistoryPdf',
    SENDEMAILWtATTACHMENT: this.urlApi + '/pages/action/SendSMTPPdfAttachment' // Sending email with pdf url
  };
  // Lost Connection Error Code
  CONNECTION_ERROR_CODE = 10058;
  constructor() { }


}
