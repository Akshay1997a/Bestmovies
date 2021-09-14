export const logOnConsole = (...arg) => {
  if (__DEV__) console.log(arg);
};

export const isNotEmpty = (data) => {
  return data !== null && data !== undefined && data !== '';
};

export const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

export const objToFormData = (rawData) => {
  let formData = new FormData();
  if (rawData && rawData != null && typeof rawData === 'object') {
    Object.keys(rawData).map((item, index) => {
      formData.append(item, rawData[item]);
    });
  }
  console.log(`New form = ${formData}`);
  return formData;
};

export const download = () => {
  const {
    dirs: {DownloadDir, DocumentDir},
  } = RNFetchBlob.fs;
  const directoryPath = Platform.select({
    ios: DocumentDir,
    android: DownloadDir,
  });
  const fileName = this.source.match(/([^\/]+)(?=\.\w+$)/)[0];
  const filePath = `${directoryPath}/${fileName}`;
  const fileExt = this.source.split('.').pop();
  var mimeType = '';

  const configOptions = Platform.select({
    ios: {
      fileCache: true,
      path: `${filePath}.${fileExt}`,
      appendExt: fileExt,
      notification: true,
    },
    android: {
      fileCache: true,
      appendExt: fileExt,
      addAndroidDownloads: {
        useDownloadManager: true,
        mime: mimeType,
        title: fileName,
        mediaScannable: true,
        notification: true,
        path: `${filePath}.${fileExt}`,
      },
    },
  });

  RNFetchBlob.config(configOptions)
    .fetch('GET', this.source)
    .progress((received, total) => {
      logOnConsole('progress', received / total);
    })
    .then((res) => {
      logOnConsole('file_download', res);
      showSuccessMessage(STRING_CONSTANTS.download_completed);
      if (isIos()) {
        RNFetchBlob.ios.previewDocument('file://' + res.path());
      }
    })
    .catch((err, code) => {
      showErrorMessage(STRING_CONSTANTS.download_failed);
      logOnConsole('ERROR', err);
    });
};
