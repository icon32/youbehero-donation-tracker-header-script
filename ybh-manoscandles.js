/* 
 * YouBeHero Donation Tracker and Collector
 * Created By YouBehero Team.
 * Authors: Bill and Dionisis.
 * Description: This scrypt is set for OpenCart ver. .... and the eshop https://www.mytel.gr/
 * For more information contact YouBeHero Support at https://youbehero.com
 * Version: 1.0.1
 */

//WebSite Classes to append
//Cart Page
const ybh_cart_page_url = '/checkout/cart/';
const ybh_cart_page_class_append = '.cart';
const ybh_cart_page_price_class = '.price';
//Checkout Page
const ybh_checkout_page_url = '/checkout/onepage/';
const ybh_checkout_page_class_append = '.col-main.col-xs-12.col-sm-9';
const ybh_checkout_page_price_class = '.price';
//Thank you Page
const ybh_thankyou_page_url = '/checkout/onepage/success/';
const ybh_thankyou_page_class_append = 'body';
const ybh_thankyou_page_order_id_class = '.padding-s p';

//Get YouBeHero Parameters From Url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ubhTr = urlParams.get('ubhTr')
const commission_percentage = urlParams.get('commission_percentage')
const cause_name = urlParams.get('cause_name')
const cause_logo_url = urlParams.get('cause_logo_url')
const subid1 = urlParams.get('subid1')

//Set YouBeHero Parameters to Local Storage
if (ubhTr) {
    localStorage.setItem('ubhTr', ubhTr);
}
if (commission_percentage) {
    localStorage.setItem('commission_percentage', commission_percentage);
}
if (cause_name) {
    localStorage.setItem('cause_name', cause_name);
}
if (cause_logo_url) {
    localStorage.setItem('cause_logo_url', cause_logo_url);
}
if (subid1) {
    localStorage.setItem('subid1', subid1);
}

//Cart Page
if (window.location.href.indexOf(ybh_cart_page_url) != -1) {
    const ubhTr = localStorage.getItem('ubhTr');
    const commission_percentage = localStorage.getItem('commission_percentage');
    const cause_name = localStorage.getItem('cause_name');
    const cause_logo_url = localStorage.getItem('cause_logo_url');
    const subid1 = localStorage.getItem('subid1');


    if (ubhTr) {
        var ybh_priceEls = jQuery(ybh_cart_page_price_class).text();

        var ybh_shop_total_price = parseInt(ybh_priceEls.replace(/^\D+/g, ''));
        var ybh_total_give = (commission_percentage / 100) * ybh_shop_total_price;
        ybh_total_give = ybh_total_give.toFixed(2);
        jQuery(ybh_cart_page_class_append).append(` 
        <div class="ybh-container" style="border: 1px solid #dbdbdb; padding: 10px; border-radius: 3px; margin-top: 15px; margin-bottom: 15px; color: #000;">
            <div class="row">
                <div style="-webkit-box-flex: 0; -ms-flex: 0 0 16.66667%; flex: 0 0 16.66667%; max-width: 7.66667%; position: relative; width: 100%; padding-left: 15px; display: inline-block;">
                <img src="https://youbehero.com` + cause_logo_url + ` " alt="" style="max-width: 100%; height: auto; vertical-align: middle; border-style: none; padding-top: 4px;">
                </div>
                <div style="-webkit-box-flex: 0; -ms-flex: 0 0 83.33333%; flex: 0 0 83.33333%; max-width: 83.33333%; position: relative; width: 100%; padding-right: 15px; padding-left: 15px; display: inline-block; vertical-align: top;">              
                <p style="font-size: 14px; margin-bottom: 10px;">Ολοκλήρωσε την αγορά σου και μαζί θα προσφέρουμε <strong id="ybh-amount"> ` + ybh_total_give + `€ </strong> στην οργάνωση  <strong id="ybh-organization"> ` + cause_name + `</strong> χωρίς κανένα κόστος για εσένα! </p>
                <p style="font-size: 10px;">Υποστηρίζεται από το <a href="https://youbehero.com" title="Ανοίγει την σελίδα YouBeHero σε νέα καρτέλα " target="_blank"><img class="img-fluid" src="https://www.youbehero.com/img/various/logo.svg" style="max-width: 60px;" /></a></p>
                </div> 
            </div>
        </div>
    `);
    }

}
//Checkout Page
if (window.location.href.indexOf(ybh_checkout_page_url) != -1) {
    const ubhTr = localStorage.getItem('ubhTr');
    const commission_percentage = localStorage.getItem('commission_percentage');
    const cause_name = localStorage.getItem('cause_name');
    const cause_logo_url = localStorage.getItem('cause_logo_url');
    const subid1 = localStorage.getItem('subid1');

    jQuery(document).ready(function() {
        if (ubhTr) {
            var ybh_priceEls = jQuery(ybh_checkout_page_price_class).text();
            var ybh_shop_total_price = parseInt(ybh_priceEls.replace(/^\D+/g, ''));

            if (!window.location.href.indexOf('success') != -1) {
                console.log('den exo success sto url');
                localStorage.setItem('ybh_shop_total_price', ybh_shop_total_price);
            }

            var ybh_total_give = (commission_percentage / 100) * ybh_shop_total_price;
            ybh_total_give = ybh_total_give.toFixed(2);
            jQuery(ybh_checkout_page_class_append).append(` 
            <div class="ybh-container" style="border: 1px solid #dbdbdb; padding: 10px; border-radius: 3px; margin-top: 15px; margin-bottom: 15px; color: #000;">
                <div class="row">
                    <div style="-webkit-box-flex: 0; -ms-flex: 0 0 16.66667%; flex: 0 0 16.66667%; max-width: 7.66667%; position: relative; width: 100%; padding-left: 15px; display: inline-block;">
                    <img src="https://youbehero.com` + cause_logo_url + ` " alt="" style="max-width: 100%; height: auto; vertical-align: middle; border-style: none; padding-top: 4px;">
                    </div>
                    <div style="-webkit-box-flex: 0; -ms-flex: 0 0 83.33333%; flex: 0 0 83.33333%; max-width: 83.33333%; position: relative; width: 100%; padding-right: 15px; padding-left: 15px; display: inline-block; vertical-align: top;">              
                    <p style="font-size: 14px; margin-bottom: 10px;">Ολοκλήρωσε την αγορά σου και μαζί θα προσφέρουμε <strong id="ybh-amount"> ` + ybh_total_give + `€ </strong> στην οργάνωση  <strong id="ybh-organization"> ` + cause_name + `</strong> χωρίς κανένα κόστος για εσένα! </p>
                    <p style="font-size: 10px;">Υποστηρίζεται από το <a href="https://youbehero.com" title="Ανοίγει την σελίδα YouBeHero σε νέα καρτέλα " target="_blank"><img class="img-fluid" src="https://www.youbehero.com/img/various/logo.svg" style="max-width: 60px;" /></a></p>
                    </div> 
                </div>
            </div>
        `);
        }
    })

}
//Thank you page
if (window.location.href.indexOf(ybh_thankyou_page_url) != -1) {

    const ubhTr = localStorage.getItem('ubhTr');
    const commission_percentage = localStorage.getItem('commission_percentage');
    const cause_name = localStorage.getItem('cause_name');
    const cause_logo_url = localStorage.getItem('cause_logo_url');
    const subid1 = localStorage.getItem('subid1');
    const ybh_shop_total_price = localStorage.getItem('ybh_shop_total_price');


    if (ubhTr) {
        jQuery(document).ready(function() {
            var order_id_one = jQuery(ybh_thankyou_page_order_id_class).text().split(":")[1].split(".")[0]
            var order_id = parseInt(order_id_one.replace(/^\D+/g, ''));
            var ybh_total_give = (commission_percentage / 100) * ybh_shop_total_price;
            ybh_total_give = ybh_total_give.toFixed(2);

            jQuery(ybh_thankyou_page_class_append).append(` 
            <img src="https://youbehero.com/gr/test/trackTransaction?ubhTr=` + ubhTr + `&sale_amount=` + ybh_shop_total_price + `&transaction_id=` + order_id + `" style="display:none;" />
            `);

            jQuery('.ybh-container').hide();
        })
    }
}