$(function() {
  //var tl = new TimelineMax({ onUpdate: updatePercentage });
  //var tl2 = new TimelineMax();
  //const controller = new ScrollMagic.Controller();

  //tl.from('.mains', 0, { scale: 1, ease: Power0.easeNone });
  //tl.to('.mains', 1, { scale: 1.2, ease: Power0.easeNone });

  //tl.from('.clouds', 0, { y: 0, ease: Power0.easeNone });
  //tl.to('.clouds', .5, { y: 80, ease: Power0.easeNone });

  //tl.from('.lights', 0, { x: -120, ease: Power0.easeNone });
  //tl.to('.lights', .5, { x: 0, ease: Power0.easeNone });

  //tl.from('.texts', 0, { y: 0, opacity: 1, ease: Power0.easeNone });
  //tl.to('.texts', 1, { y: -100, opacity: 0, ease: Power0.easeNone });

  //const scene = new ScrollMagic.Scene({
  //    triggerElement: ".sticky",
  //    triggerHook: "onLeave",
  //    duration: "100%"
  //})
  //    .setPin(".sticky")
  //    .setTween(tl)
  //    .addTo(controller);

  //const scene2 = new ScrollMagic.Scene({
  //    triggerElement: "blockquote"
  //})
  //    .setTween(tl2)
  //    .addTo(controller);

  //function updatePercentage() {
  //    //percent.innerHTML = (tl.progress() *100 ).toFixed();
  //    tl.progress();
  //    console.log(tl.progress());
  //}

  /* Card Hover Full Image */

  var image = $('.card-full-image');
  var imageContainer = $('.card-full-image-container');

  $('.card-hover-full-image')
    .mouseover(function() {
      var index = $(this).index();

      image.siblings().removeClass('uk-active');
      image.eq(index).addClass('uk-active');

      imageContainer.addClass('uk-active');
    })
    .mouseout(function() {
      image.removeClass('uk-active');
      imageContainer.removeClass('uk-active');
    });

  /* Picker Date */

  var lang = $('html').attr('lang');

  var date = new Date();
  date.setDate(date.getDate() - 1);

  var year = date.getUTCFullYear();
  var month = date.getUTCMonth();
  var day = date.getUTCDate();

  var pickerOptions = {
    tr: {
      monthsFull: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      weekdaysShort: ['Pa', 'Pt', 'Sl', 'Ça', 'Pe', 'Cu', 'Ct'],
      monthsShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
      weekdaysFull: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      showMonthsShort: true,
      firstDay: 1,
      format: 'dd.mm.yyyy',
      today: 'Bugün',
      clear: 'Temizle',
      close: 'Kapat',
      labelMonthNext: 'Sonraki Ay',
      labelMonthPrev: 'Önceki Ay',
      labelMonthSelect: 'Ayı Seç',
      labelYearSelect: 'Yılı Seç',
      selectMonths: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable'),
      selectYears: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable') ? 100 : false,
      max: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable'),
    },
    en: {
      monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      showMonthsShort: true,
      firstDay: 1,
      format: 'dd.mm.yyyy',
      today: 'Today',
      clear: 'Clear',
      close: 'Close',
      labelMonthNext: 'Next month',
      labelMonthPrev: 'Previous month',
      labelMonthSelect: 'Select a month',
      labelYearSelect: 'Select a year',
      selectMonths: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable'),
      selectYears: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable') ? 100 : false,
      max: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable'),
    },
    de: {
      monthsFull: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      weekdaysFull: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
      showMonthsShort: true,
      firstDay: 1,
      format: 'dd.mm.yyyy',
      today: 'Heute',
      clear: 'Klar',
      close: 'Schließen',
      labelMonthNext: 'Nächsten Monat',
      labelMonthPrev: 'Vorheriger Monat',
      labelMonthSelect: 'Wähle einen Monat',
      labelYearSelect: 'Wählen Sie ein Jahr aus',
      selectMonths: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable'),
      selectYears: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable') ? 100 : false,
      max: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable'),
    },
    ru: {
      monthsFull: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekdaysFull: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      showMonthsShort: true,
      firstDay: 1,
      format: 'dd.mm.yyyy',
      today: 'Today',
      clear: 'Clear',
      close: 'Close',
      labelMonthNext: 'Next month',
      labelMonthPrev: 'Previous month',
      labelMonthSelect: 'Select a month',
      labelYearSelect: 'Select a year',
      selectMonths: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable'),
      selectYears: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable') ? 100 : false,
      max: $('.datepicker.datepicker-disabled').hasClass('datepicker-selectable'),
    },
  };

  if ($('.datepicker').hasClass('datepicker-disabled')) {
    pickerOptions['de'].disable = pickerOptions['ru'].disable = pickerOptions['en'].disable = pickerOptions['tr'].disable = [{ from: [1970, 1, 1], to: [year, month, day] }];
  }

  if (pickerOptions[lang]) {
    $('.datepicker').pickadate(pickerOptions[lang]);
  } else {
    $('.datepicker').pickadate(pickerOptions['en']);
  }

  $('#data-checkin1.datepicker-disabled').change(function() {
    var checkinValue = $(this)
      .val()
      .split('.');
    var checkinDay = parseInt(checkinValue[0]);
    var checkinMonthIndex = parseInt(checkinValue[1]) - 1;
    var checkinYear = parseInt(checkinValue[2]);

    var checkoutDate = new Date(checkinYear, checkinMonthIndex, checkinDay);
    checkoutDate.setDate(checkoutDate.getDate() + 1);

    var checkoutDay = checkoutDate.getDate();
    var checkoutMonth = checkoutDate.getMonth();
    var checkoutYear = checkoutDate.getFullYear();

    $('#data-checkout1.datepicker-disabled')
      .pickadate('picker')
      .open();

    $('#data-checkout1.datepicker-disabled')
      .pickadate('picker')
      .set('enable', [
        {
          from: [1970, 1, 1],
          to: [checkoutYear, checkoutMonth, checkoutDay],
        },
      ])
      .set('min', [checkoutYear, checkoutMonth, checkoutDay])
      .set('view', [checkoutYear, checkoutMonth, checkoutDay]);
  });

  $('#data-checkin2.datepicker-disabled').change(function() {
    var checkinValue = $(this)
      .val()
      .split('.');
    var checkinDay = parseInt(checkinValue[0]);
    var checkinMonthIndex = parseInt(checkinValue[1]) - 1;
    var checkinYear = parseInt(checkinValue[2]);

    var checkoutDate = new Date(checkinYear, checkinMonthIndex, checkinDay);
    checkoutDate.setDate(checkoutDate.getDate() + 1);

    var checkoutDay = checkoutDate.getDate();
    var checkoutMonth = checkoutDate.getMonth();
    var checkoutYear = checkoutDate.getFullYear();

    $('#data-checkout2.datepicker-disabled')
      .pickadate('picker')
      .set('enable', [
        {
          from: [1970, 1, 1],
          to: [checkoutYear, checkoutMonth, checkoutDay],
        },
      ])
      .set('min', [checkoutYear, checkoutMonth, checkoutDay])
      .set('view', [checkoutYear, checkoutMonth, checkoutDay]);
  });

  $('.form-nav > a').click(function() {
    $(this)
      .siblings()
      .removeClass('uk-active');
    $(this).addClass('uk-active');
  });

  $('.form-nav-airplane').click(function() {
    $('.item-airplane').removeClass('uk-hidden');
  });

  $('.form-nav-otel').click(function() {
    $('.item-airplane').addClass('uk-hidden');
  });

  /* Fancybox */

  $.fancybox.defaults.btnTpl.virtual = '<button data-virtual-tour class="fancybox-button uk-light"><span uk-icon="icon: icn-360; ratio: .5;"></span></button>';

  $('body').on('click', '[data-virtual-tour]', function() {
    window.open('http://www.smkproduction.eu5.org', '_blank');
  });

  $('[data-fancybox="images"]').fancybox({
    margin: [44, 0, 22, 0],
    thumbs: {
      autoStart: true,
      axis: 'x',
    },
    buttons: ['zoom', 'slideShow', 'virtual', 'thumbs', 'close'],
  });

  /* Toogle Plan */

  var planButton = $('.button-plan');

  planButton.click(function() {
    var dataToggle = $(this).attr('data-toggle');

    $('html, body').animate({ scrollTop: $('#' + dataToggle).position().top - 84 }, 'slow');
  });

  /* Mask */

  $('.mask-phone').mask('(000) 000-0000');

  $('.mask-date').mask('00.00.0000');

  $('.mask-phone-code').mask('A00', {
    translation: {
      A: {
        pattern: /[+/]/,
        fallback: '+',
        optional: false,
      },
    },
    onComplete: function() {
      $('.mask-phone').focus();
    },
  });

  $('.mask-phone').keydown(function(e) {
    var valLenght = $(this).val().length;

    if (e.keyCode === 8 && valLenght < 1) {
      $('.mask-phone-code').focus();
    }
  });

  /* Validation */

  var message = 'Lütfen boşlukları doldurunuz.';
  var lettersonly = 'Lütfen sadece harf giriniz.';
  var phone = 'Lütfen 10 haneli bir telefon numarası giriniz.';
  var email = 'Lütfen geçerli bir e-posta adresi giriniz.';

  if (lang === 'en') {
    message = 'Please fill in the blank.';
    lettersonly = 'Please enter only letters.';
    phone = 'Please enter a 10-digit phone number.';
    email = 'Please enter a valid email addres.';
  } else if (lang === 'ru') {
    message = 'Пожалуйста заполните анкету.';
    lettersonly = 'Пожалуйста, введите только буквы.';
    phone = 'Пожалуйста, введите 10-значный номер телефона.';
    email = 'Пожалуйста, введите действительный адрес электронной почты.';
  } else if (lang === 'de') {
    message = 'Bitte füllen Sie das Feld aus.';
    lettersonly = 'Bitte geben Sie nur Buchstaben ein.';
    phone = 'Bitte geben Sie eine 10-stellige Telefonnummer ein.';
    email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
  }

  $.validator.addMethod('lettersonly', function(value, element) {
    return this.optional(element) || /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]*$/.test(value);
  });

  $('#form-contact').validate({
    rules: {
      FirstName: {
        required: true,
        lettersonly: true,
      },
      LastName: {
        required: true,
        lettersonly: true,
      },
      Email: {
        required: true,
        email: true,
      },
      Phone: {
        required: true,
        minlength: 14,
      },
      PhoneCode: {
        required: true,
      },
      Message: {
        required: true,
      },
      Aggreement: {
        required: true,
      },
    },
    messages: {
      FirstName: {
        required: message,
        lettersonly: lettersonly,
      },
      LastName: {
        required: message,
        lettersonly: lettersonly,
      },
      Email: {
        required: message,
        email: email,
      },
      Phone: {
        required: message,
        minlength: phone,
      },
      PhoneCode: {
        required: message,
      },
      Message: {
        required: message,
      },
      Aggreement: {
        required: message,
      },
    },
    submitHandler: function(form) {
      form.submit();
    },
  });

  $('#form-sales').validate({
    rules: {
      Type: {
        required: true,
      },
      FirstName: {
        required: true,
        lettersonly: true,
      },
      LastName: {
        required: true,
        lettersonly: true,
      },
      Email: {
        required: true,
        email: true,
      },
      Phone: {
        required: true,
        minlength: 14,
      },
      PhoneCode: {
        required: true,
      },
      Message: {
        required: true,
      },
      Aggreement: {
        required: true,
      },
    },
    messages: {
      Type: {
        required: message,
      },
      FirstName: {
        required: message,
        lettersonly: lettersonly,
      },
      LastName: {
        required: message,
        lettersonly: lettersonly,
      },
      Email: {
        required: message,
        email: email,
      },
      Phone: {
        required: message,
        minlength: phone,
      },
      PhoneCode: {
        required: message,
      },
      Message: {
        required: message,
      },
      Aggreement: {
        required: message,
      },
    },
    submitHandler: function(form) {
      form.submit();
    },
  });

  $('#form-special-offer').validate({
    rules: {
      FirstName: {
        required: true,
        lettersonly: true,
      },
      LastName: {
        required: true,
        lettersonly: true,
      },
      Email: {
        required: true,
        email: true,
      },
      Phone: {
        required: true,
        minlength: 14,
      },
      PhoneCode: {
        required: true,
      },
      Message: {
        required: true,
      },
      Aggreement: {
        required: true,
      },
    },
    messages: {
      FirstName: {
        required: message,
        lettersonly: lettersonly,
      },
      LastName: {
        required: message,
        lettersonly: lettersonly,
      },
      Email: {
        required: message,
        email: email,
      },
      Phone: {
        required: message,
        minlength: phone,
      },
      PhoneCode: {
        required: message,
      },
      Message: {
        required: message,
      },
      Aggreement: {
        required: message,
      },
    },
    submitHandler: function(form) {
      form.submit();
    },
  });

  $('#form-human-resources').validate({
    rules: {
      FirstName: {
        required: true,
        lettersonly: true,
      },
      LastName: {
        required: true,
        lettersonly: true,
      },
      Email: {
        required: true,
        email: true,
      },
      Phone: {
        required: true,
        minlength: 14,
      },
      PhoneCode: {
        required: true,
      },
      Message: {
        required: true,
      },
      File: {
        required: true,
      },
      Aggreement: {
        required: true,
      },
    },
    messages: {
      FirstName: {
        required: message,
        lettersonly: lettersonly,
      },
      LastName: {
        required: message,
        lettersonly: lettersonly,
      },
      Email: {
        required: message,
        email: email,
      },
      Phone: {
        required: message,
        minlength: phone,
      },
      PhoneCode: {
        required: message,
      },
      Message: {
        required: message,
      },
      File: {
        required: message,
      },
      Aggreement: {
        required: message,
      },
    },
    submitHandler: function(form) {
      form.submit();
    },
  });

  $('#form-member-clup-login').validate();

  $('#form-member-clup-register').validate();

  $('#form-member-clup-contact').validate();

  /* Reservation */

  function getCookie(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length === 2)
      return parts
        .pop()
        .split(';')
        .shift();
    return '';
  }

  Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
  };

  function getDateFormatted(dateI) {
    let dd = dateI.getDate();
    let mm = dateI.getMonth() + 1;
    let yyyy = dateI.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return yyyy + '-' + mm + '-' + dd;
  }

  $('[click-prevent]').click(function(e) {
    e.preventDefault();
  });

  $('#form-reservation #child').change(function() {
    let val = parseInt($(this).val());
    const olds = ['', 'one', 'two', 'three', 'four'];

    const childContaioner = $('.child-old');
    if (val <= 0) childContaioner.addClass('uk-hidden');
    else childContaioner.removeClass('uk-hidden');

    for (index in olds) {
      let element = $(`.child-old .old-${olds[index]}`);
      if (index <= val && index > 0) element.removeClass('uk-hidden');
      else element.addClass('uk-hidden');
    }
  });

  $(document).on('submit', '#form-reservation', function(event) {
    event.preventDefault();

    let form = $(this);
    let airportContent = form.find("[name='airport']").val();
    let airportCode = airportContent ? airportContent.split('-')[0] : '';
    let checkin = form
      .find("[name='checkin']")
      .val()
      .replace(/\//g, '.');
    let checkout = form
      .find("[name='checkout']")
      .val()
      .replace(/\//g, '.');
    let hotelId = form.find("[name='hotel']").val();
    let room = form.find("[name='room']").val();
    let adult = form.find("[name='adult']").val();
    let children = form.find("[name='child']").val();
    let childAge1 = form.find("[name='childAge1']").val();
    let childAge2 = form.find("[name='childAge2']").val();
    let childAge3 = form.find("[name='childAge3']").val();
    let childAge4 = form.find("[name='childAge4']").val();

    //console.log(airportContent, airportCode, checkin, checkout, hotelId, room, adult, children);

    let checkInMessage = $('#checkInMessage').val();
    let checkOutMessage = $('#checkOutMessage').val();

    if (checkin === '') {
      UIkit.modal.dialog('<p class="uk-modal-body"><span class="uk-text-warning uk-margin-small-right" uk-icon="icon: warning; ratio: 1.2;"></span>' + checkInMessage + '</p>');
    } else if (checkout === '') {
      UIkit.modal.dialog('<p class="uk-modal-body"><span class="uk-text-warning uk-margin-small-right" uk-icon="icon: warning; ratio: 1.2;"></span>' + checkOutMessage + '</p>');
    } else {
      if (typeof window.current_language === 'undefined' || window.current_language === '') {
        window.current_language = 'tr';
      }

      var paramsArr = ['https://gloria.hweb.com/?'];
      paramsArr.push('fromCityAirport='.concat(encodeURIComponent(airportCode)));
      paramsArr.push('fromAirport='.concat(''));
      paramsArr.push('fromDate='.concat(checkin));
      paramsArr.push('toDate='.concat(checkout));
      paramsArr.push('rnum='.concat(room));
      paramsArr.push('cnum1='.concat(children));
      paramsArr.push('chdAge11='.concat(childAge1));
      paramsArr.push('chdAge12='.concat(childAge2));
      paramsArr.push('chdAge13='.concat(childAge3));
      paramsArr.push('chdAge14='.concat(childAge4));
      paramsArr.push('anum1='.concat(adult));
      paramsArr.push('hotelId='.concat(hotelId));
      paramsArr.push('noNeedFlight='.concat(0));
      paramsArr.push('Lang='.concat(window.current_language));
      paramsArr.push('noreq='.concat(true));
      paramsArr.push('hwebref='.concat('bwidget'));
      paramsArr.push('_ga='.concat(getCookie('_ga')));
      paramsArr.push('_gid='.concat(getCookie('_gid')));

      var url = paramsArr.join('&');
      //console.log(url);
      window.open(url, '_blank');
    }

    return false;
  });

  /* Airport Auto Complete */

  var currentLanguage = $('html').attr('lang');

  $('#airport').each(function(key, el) {
    $(el).autocomplete({
      delay: 100,
      minLength: 3,
      source: function(request, response) {
        $.ajax({
          url: 'https://alibey.hweb.com/commons/airports/' + currentLanguage + '/' + request.term,
          data: {},
          success: function(data) {
            response(
              data.map(function(item) {
                return item.airportCode + ' ' + item.airportName + ' ' + item.cityName + ' ' + item.countryCode;
              }),
            );
          },
        });
      },
    });
  });

  /* View All Button */

  var viewAllButton = $('.view-all-button');

  viewAllButton.click(function() {
    $(this).toggleClass('uk-active');

    if (viewAllButton.hasClass('uk-active')) {
      if (lang === 'en') {
        viewAllButton.text('Hide');
      } else if (lang === 'tr') {
        viewAllButton.text('Gizle');
      } else if (lang === 'de') {
        viewAllButton.text('Verstecken');
      } else if (lang === 'ru') {
        viewAllButton.text('скрывать');
      }
    } else {
      if (lang === 'en') {
        viewAllButton.text('View All');
      } else if (lang === 'tr') {
        viewAllButton.text('Tümünü Göster');
      } else if (lang === 'de') {
        viewAllButton.text('Alle Anzeigen');
      } else if (lang === 'ru') {
        viewAllButton.text('ПОСМОТРЕТЬ ВСЕ');
      }
    }
  });
});
