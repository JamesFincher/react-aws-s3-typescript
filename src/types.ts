export type DateISOString = string; // "2019-01-27T11:07:43.102Z"
export type XAmzDate = string; // "20190127T110743102Z"
export type DateYMD = string; // "20190127"

export interface IConfig {
  bucketName: any;
  dirName?: any;
  region: any;
  accessKeyId: any;
  secretAccessKey: any;
  s3Url?: any;
}

type GenericType = {
  [key: string]: string;
};

type Conditions = [
  GenericType,
  GenericType,
  string[],
  string[],
  string[],
  GenericType,
  GenericType,
  GenericType,
  GenericType,
  GenericType,
];

export type Policy = {
  conditions: Conditions;
  expiration: DateISOString;
};

export type UploadResponse = {
  bucket: string;
  key: string;
  location: string;
  status: number;
};

export type DeleteResponse = {
  ok: boolean;
  status: number;
  message: string;
  fileName: string;
};

export type ListFileResponse = {
  message: string;
  data: AWS.S3.ListObjectsOutput;
};

export type ListFileErrorResponse = {
  err: string;
  errMessage: string;
  data: any;
};
