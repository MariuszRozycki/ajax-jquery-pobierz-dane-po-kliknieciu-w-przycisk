$(document).ready(function () {
  let button = $('button');

  // 1 wariant
  const getData = () => {
    $.get('https://akademia108.pl/api/ajax/get-post.php', {
      mode: 'cors',
      method: 'GET',
    })
      .done(function (data) {

        let parWrapper = $('.paragraph-wrapper');

        let parUserId = $('<p></p>').text('User ID: ' + data.userId);
        let parId = $('<p></p>').text('ID: ' + data.id);
        let parTitle = $('<p></p>').text('Title: ' + data.userId);
        let parBody = $('<p></p>').text('Body ID: ' + data.body);
        let hr = $('<hr />');

        console.log(parUserId);
        console.log(parId);
        console.log(parTitle);
        console.log(parBody);

        parWrapper.append(parUserId);
        parWrapper.append(parId);
        parWrapper.append(parTitle);
        parWrapper.append(parBody);
        parWrapper.append(hr);

      })
      .fail(function (error) {
        console.error(error);
      });
  }

  // button.click(getData); // odkomentowac linie, aby uzyc wariantu 1

  // 2 wariant

  const getDataJson = () => {
    $.getJSON('https://akademia108.pl/api/ajax/get-post.php', {
      mode: 'cors',
      method: 'GET',
    })
      .done(function (data) {

        let parWrapper = $('.paragraph-wrapper');

        let parUserId = $('<p></p>').text('User ID: ' + data.userId);
        let parId = $('<p></p>').text('ID: ' + data.id);
        let parTitle = $('<p></p>').text('Title: ' + data.userId);
        let parBody = $('<p></p>').text('Body ID: ' + data.body);
        let hr = $('<hr />');

        console.log(parUserId);
        console.log(parId);
        console.log(parTitle);
        console.log(parBody);

        parWrapper.append(parUserId);
        parWrapper.append(parId);
        parWrapper.append(parTitle);
        parWrapper.append(parBody);
        parWrapper.append(hr);

      })
      .fail(function (error) {
        console.error(error);
      });
  }

  button.click(getDataJson);



});



