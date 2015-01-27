---
layout: none
---
(function($){
  var searchJSON,
      $search = $(".search"),
      $input = $search.find("input"),
      $results;

  $(".search").append("<ul></ul>");
  $results = $search.find("ul")

  function getSearchJSON() {
    $.getJSON("{{ site.baseurl }}/search.json", function(e) {
      searchJSON = e;
    });
  }

  function doSearch(e) {
    results = [];

    if (e != "") {
      $.each(searchJSON, function(t, n) {
        var r = n.title,
            i = n.title.toLowerCase(),
            s = n.href;

        i.indexOf(e) !== -1 && results.push([r, s])
      });
      printResults();
    } else {
      $results.html();
      results = [];
      printResults();
    }
  }

  function printResults() {
    $results.html("");

    $results.html(function() {
      if (results.length == 0) {
        $results.append('<li>No results found</li>');
      } else {
        $.each(results, function(t, n) {
            $results.append('<li><a href="' + n[1] + '">' + n[0] + '</a></li>');
        });
      }
    });
  }

  $input.keyup(function() {
    if ($input.val().trim().length > 2) {
      $results.show();
    } else {
      $results.hide();
    }
  });

  $(document).mouseup(function (e) {
    if (!$results.is(e.target) && $results.has(e.target).length === 0) {
      $results.hide();
    }
  });

  $(document).ready(function() {
    getSearchJSON();

    $input.keyup(function() {
      var e = $(this).val().toLowerCase();
      doSearch(e);
    });
  });
})(jQuery);
