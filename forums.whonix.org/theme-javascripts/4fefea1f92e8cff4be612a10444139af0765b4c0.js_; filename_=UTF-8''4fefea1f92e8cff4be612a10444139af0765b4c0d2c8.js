
    (function() {
        let url = ( window.location.href.match(/\.onion/) ? 'http://dds6qkxpwdeubwucdiaord2xgbbeyds25rbsgr73tbfpqpt4a6vjwsyd.onion' : 'https://www.whonix.org' );
        window.getWikiUrl = () => url;
    })();


    (function() {
  
      let contentForSlides = `
        <h1><b>Mission 2023</b> : We want to <b>grow and improve</b> - please help Whonix!</h1>
        
        <div data-crypto-addresses='{
          "payBitcoin": "3LspZMk4p7ECc4Ugd6DKwSTgqyxn41KG3B",
          "payMonero": "84ZZSsqyh5niztCgxmWAejDLu9eDerWo4Wsx8woEhDGpdKP3BWPtqenNjKuv8vojrB968U3hqYTKgLGt2zEcGopX1qaEPew",
          "payEthereum": "0x665B0FF55ee44F0d765dDd88A32Aa3b912936E2e"
        }'>
        </div>
        
        <div>
            <img src="/w/images/3/30/End-of-year-green.jpg" />
            Whonix is an Open Source security and anonymity power house - <b>providing tremendous value to thousands of users</b>! 
            But only those who move forward continue to thrive. Would you support our next big leap? 
        </div>
        
        <div>
            <img src="/w/images/2/2d/End-of-year-blue.jpg" />
            For 2023 we're preparing an installer for Windows and Linux to help new users get started. 
            We want to <b>improve the usability and enhance the user experience</b>. This includes a Whonix starter. 
        </div>
        
        <div>
            <img src="/w/images/e/ef/End-of-year-yellow.jpg" />
            We aim to create a high impact outreach with articles and videos to attract more users, which in turn means even more anonymity for YOU. 
            <b>Would you consider a donation to keep Whonix independent</b> and help reach these new goals? Thank you.
        </div>
      `;
          
      let initBanner = () => {
        
        // Will not be executed after 2022-31-12 23:59
        if( Date.now() > 1672527599000 ) {
          return; 
        }
      
        // If the user has the dismissed less than a week ago, it will not be executed
        if( localStorage.getItem('dismiss-end-of-year-sitenotice') > Date.now() ) {
            $('#siteNotice').addClass('hide-notice');
            return;
        }
        // Else remove item (because it's not valid) if it exists
        localStorage.removeItem('dismiss-end-of-year-sitenotice');
    
        $('.below-site-header-outlet.search-banner').append( '<div id="end-of-year-banner-wrapper"></div>');
        
        initEndOfYearSitenotice( $('#end-of-year-banner-wrapper'), getWikiUrl(), contentForSlides );
    
        let eoy = $('#donate-end-of-year');
        eoy.find('.btc .cbutton').attr('src','/w/images/thumb/2/29/BC_Logo_.png/40px-BC_Logo_.png')
        eoy.find('.xmr .cbutton').attr('src','/w/images/thumb/0/05/Monero-symbol-1280.png/40px-Monero-symbol-1280.png')
        eoy.find('.eth .cbutton').attr('src','/w/images/thumb/2/2c/Ethereumlogo.png/40px-Ethereumlogo.png')
    
        eoy.find('.dismiss').on('click', function() {
			$('#end-of-year-banner-wrapper').animate({ height: 0, opacity: 0 }, 1000, function() {
				$(this).attr('style','display:none !important;');
			});
		});
    
      };
      
      $(document).ready( initBanner );
      
    })();




    $(document).ready( () => {
        let searchTitle = $('.below-site-header-outlet.search-banner .custom-search-banner-wrap > p');
        let t = searchTitle.text();
        t = t.replace( '(link in header)', '' ).replace( 'Support', `<a href="${getWikiUrl()}/wiki/Support">Support</a>` );
        searchTitle.html( t );
        console.log( searchTitle )
    });


