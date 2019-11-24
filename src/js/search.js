function setDatepickers(elem, lang) {
  $(elem).each(function(i) {
    var $this = $(this),
      ww = $(window).width();

    $this.on("click", function() {
      $("html,body").animate(
        {
          scrollTop: $this.offset().top / 1.5
        },
        1000
      );
    });

    var container = $this.parent();
    var format = "";
    var startDay = "";

    if (ww < 767) {
      container = $this
        .closest(".search-panel-expand")
        .find(".dates:nth-child(1)");
    }

    if (lang != "en") {
      format = "DD.MM.YYYY";
      startDay = "monday";
    } else {
      format = "MM.DD.YYYY";
      startDay = "sunday";
    }

    var datepicker = $this.dateRangePicker({
      language: lang,
      container: container,
      format: format,
      startOfWeek: startDay,
      // autoClose: true,
      singleDate: true,
      singleMonth: true,
      showTopbar: false,
      startDate: new Date(),
      selectForward: true,
      customOpenAnimation: function(cb) {
        $(this).fadeIn(300, cb);
      },
      customCloseAnimation: function(cb) {
        $(this).fadeOut(300, cb);
      },
      setValue: function(s) {
        if ($(this).attr("readonly")) {
          $(this).val(s);
          $(this)
            .siblings()
            .val(s);
        }
      },
      beforeShowDay:
        i == 1
          ? function(t) {
              var checkinDate = moment($("#inpCheckinDate").val(), format);
              var checkinDay = checkinDate.format("DD");
              var checkinMonth = checkinDate.format("MM");
              var checkinYear = checkinDate.format("YYYY");
              // console.log(checkinDay,checkinMonth,checkinYear);

              var valid = !(
                t.getDate() <= checkinDay &&
                t.getMonth() == checkinMonth - 1 &&
                t.getFullYear() == checkinYear
              ); //disable saturday and sunday
              var _class = "";
              var _tooltip = valid ? "" : "";
              return [valid, _class, _tooltip];
            }
          : "",
      customTopBar: i == 0 ? "Check In" : "Check Out"
    });

    if (i == 0) {
      datepicker.eq(i).bind("datepicker-change", function(event, obj) {
        var $this = $(this);

        if ($this.val() != "") {
          var newDate = moment(obj.value, format)
            .add(3, "days")
            .format(format);
          $("#inpCheckoutDate")
            .data("dateRangePicker")
            .setStart(newDate)
            .open();
        }
      });
    }
  });
}

function setChildDatepickers(elem, lang) {
  $(elem).each(function() {
    var $this = $(this),
      ww = $(window).width();

    $this.on("click", function() {
      $("html,body").animate(
        {
          scrollTop: $this.offset().top / 1.5
        },
        1000
      );
    });

    var format = "";
    var startDay = "";

    if (lang != "en") {
      format = "DD.MM.YYYY";
      startDay = "monday";
    } else {
      format = "MM.DD.YYYY";
      startDay = "sunday";
    }

    var dateYear = new Date();

    var childStartDate = moment(
      `01.01.${dateYear.getFullYear() - 11}`,
      format
    ).format(format);

    $this.dateRangePicker({
      language: lang,
      container:
        ww < 768 ? $this.closest("[data-hidden-child]") : $this.parent(),
      format: format,
      startOfWeek: startDay,
      autoClose: true,
      singleDate: true,
      singleMonth: true,
      monthSelect: true,
      startDate: childStartDate,
      yearSelect: function(current) {
        return [dateYear.getFullYear() - 11, dateYear.getFullYear()];
      },
      showTopbar: false,
      customOpenAnimation: function(cb) {
        $(this).fadeIn(300, cb);
      },
      customCloseAnimation: function(cb) {
        $(this).fadeOut(300, cb);
      },
      setValue: function(s) {
        if ($(this).attr("readonly")) {
          $(this).val(s);
          $(this)
            .siblings()
            .val(s);
        }
      }
    });

    var value = $(this)
      .siblings('input[type="hidden"]')
      .val();

    // console.log(value);

    if (value != "") {
      var newDate = moment(value, format).format(format);
      $(this)
        .data("dateRangePicker")
        .setStart(newDate);
    }
  });
}

function setSingleDatepicker(elem, lang, minDate) {
  var format = "",
    $this = $(elem);

  if (lang != "en") {
    format = "DD.MM.YYYY";
  } else {
    format = "MM.DD.YYYY";
  }

  $this.each(function() {
    var config = {
      singleDate: true,
      singleMonth: true,
      showShortcuts: false,
      showTopbar: false,
      language: lang,
      container: $(this).parent(),
      format: format,
      monthSelect: true,
      yearSelect: [1950, moment().get("year")],
      customOpenAnimation: function(cb) {
        $(this).fadeIn(300, cb);
      },
      customCloseAnimation: function(cb) {
        $(this).fadeOut(300, cb);
      },
      setValue: function(s) {
        if ($(this).attr("readonly")) {
          $(this).val(s);
          $(this)
            .siblings()
            .val(s);
        }
      }
    };

    $(this).dateRangePicker(config);
  });
}

function checkPlaceHolder() {
  $(".fake-placeholder").each(function() {
    $("input.form-control,textarea.form-control").each(function() {
      if ($(this).val() != "") {
        $(this)
          .closest(".fake-placeholder")
          .addClass("focused");
      } else {
        $(this)
          .closest(".fake-placeholder")
          .removeClass("focused");
      }
    });
  });
}

function checkModernInput() {
  $(".fake-placeholder").each(function() {
    $("input.form-control,textarea.form-control").each(function() {
      if ($(this).val() != "") {
        $(this)
          .closest(".fake-placeholder")
          .addClass("focused");
      } else {
        $(this)
          .closest(".fake-placeholder")
          .removeClass("focused");
      }
    });
  });

  $(".fake-placeholder").each(function() {
    var $this = $(this),
      $inpElem = $this.find("input,textarea");

    $inpElem.on("focus", function() {
      $this.addClass("focused");
    });

    $inpElem.on("blur", function() {
      // console.log('active');
      var isValid = $(this).val() == "" ? true : false;
      isValid === true
        ? $this.removeClass("focused")
        : $this.addClass("focused");
    });
  });
}

$(".hotel-select__menu").each(function() {
  var hotelName = "";
  var $hotelSelectInput = $(".hotel-select-input");

  var sessionHotel = getHotelName();

  if (sessionHotel != "") {
    switch (sessionHotel) {
      case "antedon":
        $(".hotel-select__checkbox[value=1]").prop("checked", true);
        break;
      case "alinda":
        $(".hotel-select__checkbox[value=2]").prop("checked", true);
        break;
      case "claros":
        $(".hotel-select__checkbox[value=3]").prop("checked", true);
        break;
      case "residence":
        $(".hotel-select__checkbox[value=5]").prop("checked", true);
        break;
    }
  }

  $(this)
    .find(".hotel-select__menu-item")
    .each(function() {
      var $menuItemInput = $(this).find("input[type=radio]");

      if ($menuItemInput.is(":checked")) {
        hotelName = $menuItemInput.data("hotel-name");

        $hotelSelectInput.val(hotelName);
      }

      $menuItemInput.on("change", function() {
        hotelName = $(this).data("hotel-name");

        $hotelSelectInput.val(hotelName);
      });
    });
});

$(".search-panel__col.dates").each(function() {
  $(this).on("click", function() {
    var $this = $(this);
    $(".search-panel__col.dates").removeClass("active");
    $this.addClass("active");
  });
});

$('[data-name="name"]').each(function() {
  $(this)
    .first()
    .change(function() {
      checkPlaceHolder();
    });
});

$('[data-name="surname"]').each(function() {
  $(this)
    .first()
    .change(function() {
      checkPlaceHolder();
    });
});

$("#checkAvailablity").each(function() {
  $(this).on("click", function() {
    var count = 0;

    $(".hotel-select__menu-item").each(function() {
      $(this)
        .find("input[type=radio]")
        .is(":checked") == true
        ? count++
        : "";
    });

    if (count == 0) {
      $(".hotel-select-input").addClass("input-validation-error");
    }
  });
});

$("input[type=number]").each(function() {
  $(this).on("keypress", function(evt) {
    var $this = $(this);
    var dataMax = $this.data("maxlength");

    if (
      (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
      evt.which > 57
    ) {
      evt.preventDefault();
    }

    if (dataMax != undefined) {
      if ($this.val().length >= dataMax) {
        return false;
      }
    }
  });

  $(this).on("input", function() {
    var $this = $(this);
    var dataMin = $this.data("minlength");

    if (dataMin != undefined) {
      var $errorOwner = $this.closest(".input-group");
      var errorClass = "input-validation-error";

      if ($this.val().length < dataMin) {
        $errorOwner != undefined
          ? $errorOwner.addClass(errorClass)
          : $this.addClass(errorClass);
      } else {
        $errorOwner != undefined
          ? $errorOwner.removeClass(errorClass)
          : $this.removeClass(errorClass);
      }
    }
  });
});

$("[data-regex]").each(function() {
  var regex = $(this).data("regex");
  switch (regex) {
    case "text":
      $(this).on("keypress", function(evt) {
        var isValid = /^[a-zA-Zа-яА-ЯğüşöçıİĞÜŞÖÇ ]+$/.test(evt.key);
        if (!isValid) {
          evt.preventDefault();
        }
      });
      break;
  }
});

$("[data-selected]").each(function() {
  var $this = $(this);
  var thisData = $this.data("selected");

  thisData ? $this.attr("selected", "selected") : "";
});

let initSliders = () => {
  let sliders = [];

  let sliderElems = document.querySelectorAll(".rooms-container");

  sliderElems.forEach(e => {
    sliders.push(
      new Swiper(e, {
        slidesPerView: 1,
        spaceBetween: 14,
        containerModifierClass: "rooms-container--",
        wrapperClass: "rooms-wrapper",
        slideClass: "rooms-slide",
        slideActiveClass: "rooms-slide--active",
        slideNextClass: "rooms-slide--next",
        slidePrevClass: "rooms-slide--prev",
        navigation: {
          nextEl: e.querySelector(".next"),
          prevEl: e.querySelector(".prev")
        }
      })
    );
  });
};

window.onload = () => {
  initSliders();
};

$('.reservation-details-button').on("click",(e) => {
  var ww = $(window).width();

  e.preventDefault();

  if (ww < 1280) {
    $('.reservation-details').toggleClass('is-shown')
  }
})