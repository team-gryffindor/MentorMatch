module.exports = {
  extractCityState: (addressComponents) => {
    let extractedAddress = {};
    for (let i = 0; i < addressComponents.length; i++) {
      let { types, short_name } = addressComponents[i];
      if (types.indexOf('locality') >= 0) extractedAddress.city = short_name;
      else if (types.indexOf('administrative_area_level_1') >= 0)
        extractedAddress.state = short_name;
    }
    return extractedAddress;
  }
};

// let aC = [
//   {
//     long_name: 'Paramus',
//     short_name: 'Paramus',
//     types: ['locality', 'political']
//   },
//   {
//     long_name: 'Bergen County',
//     short_name: 'Bergen County',
//     types: ['administrative_area_level_2', 'political']
//   },
//   {
//     long_name: 'New Jersey',
//     short_name: 'NJ',
//     types: ['administrative_area_level_1', 'political']
//   },
//   {
//     long_name: 'United States',
//     short_name: 'US',
//     types: ['country', 'political']
//   },
//   {
//     long_name: '07652',
//     short_name: '07652',
//     types: ['postal_code']
//   }
// ];
