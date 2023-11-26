export const orgAddForm: string = `
<div class="row form-addorg mt-4">
        <div class="col-lg-10 col-md-6 pr-0 custom-col">
            <strong class="greentext header-label">Basic Info</strong>
            
                <div class="form-group">
                    <!-- By default select option with value 1 is given-->
                    <!-- Sales user role can add all organization types except for licensed customer -->
                    <select name="Organization[organizationTypes]" id="Organization_organizationTypes">
<option value="1" selected="selected">Licensed Customer</option>
<option value="2">Pilot</option>
<option value="3">Pre-K Demo</option>
<option value="4">K Demo</option>
<option value="5">Internal Test</option>
</select>                </div>
                <div class="form-group">
                    <!-- <input type="text" id="demo-org-email" class="email-input email-error-border" placeholder="Email @ text*"> -->
                    <input maxlength="255" placeholder="Email @ text*" id="demo_email_txt" name="Organization[demo_email_txt]" type="text" style="display: none;">                    <p class="errorlabel"></p>
                </div>

                <div class="form-group icon-txtbox">
                    <img src="https://rmsstaging.hatchearlychildhood.com/images/insight/UserIconLarge.png" alt="">
                    <!-- <input type="text" id="" placeholder="Name*" tabindex="2" maxlength="50" name="" value=""> -->
                    <input maxlength="255" placeholder="Name*" name="Organization[name]" id="Organization_name" type="text">                    <p class="errorlabel"></p>
                </div>
                <div class="form-group">
                    <!-- <input type="text" id="" placeholder="User Defined ID" tabindex="2" maxlength="50" name="" value=""> -->
                    <a href="#" onclick="helpwindow('user-defined-ID-help-wrapper');"></a>
                    <input maxlength="255" placeholder="User Defined ID" name="Organization[user_defined_id]" id="Organization_user_defined_id" type="text">                    <p class="errorlabel"></p>
                </div>
                <div class="form-group icon-txtbox">
                    <img src="https://rmsstaging.hatchearlychildhood.com/images/insight/KeyIconLarge.png" alt="">
                    <!-- <input type="text" id="" placeholder="Hatch ID*" tabindex="2" maxlength="50" name="" value=""> -->
                    <input maxlength="255" placeholder="Hatch ID*" name="Organization[mas_id]" id="Organization_mas_id" type="text">                    <p class="errorlabel"></p>
                </div>
                <div class="form-group icon-txtbox">
                    <img src="https://rmsstaging.hatchearlychildhood.com/images/insight/GlobeIconLarge.png" alt="">
                    <!-- <input type="text" id="" placeholder="Address 1*" tabindex="2" maxlength="50" name="" value=""> -->
                    <input maxlength="255" placeholder="Address 1*" name="Organization[address1]" id="Organization_address1" type="text">                    <p class="errorlabel"></p>
                </div>
                <div class="form-group">
                    <!-- <input type="text" id="" placeholder="Address 2*" tabindex="2" maxlength="50" name="" value=""> -->
                    <input maxlength="255" placeholder="Address 2" name="Organization[address2]" id="Organization_address2" type="text">                    <p class="errorlabel"></p>
                </div>
                <div class="form-group w-50">
                    <!-- <select id="" class="" name="">
                        <option value="">Country</option>
                    </select> -->
                    <select class="unique_country_code" name="Organization[country_code]" id="Organization_country_code">
<option value="">Country*</option>
<option value="USA">USA</option>
<option value="Canada">Canada</option>
<option value="United Kingdom">United Kingdom</option>
<option value="Australia">Australia</option>
<option value="Egypt">Egypt</option>
<option value="India">India</option>
<option value="Virgin Islands">Virgin Islands</option>
<option value="South Africa">South Africa</option>
<option value="Central America">Central America</option>
<option value="Honduras">Honduras</option>
</select>                </div>
                <div class="form-group col-sm-12 pr-0 pl-0 mt-4 mb-4">
                    <div class="row phone-numb-validate-add">
                        <div class="col-4 pl-0">
                            <!-- <input type="text" autocomplete="off" placeholder="City*" maxlength="" id="" value=""> -->
                            <input size="8" maxlength="255" placeholder="City*" name="Organization[city]" id="Organization_city" type="text">                        </div>
                        <div class="col-4 pl-0">
                            <!-- <select id="" class="" name="">
                                <option value="">State</option>
                            </select> -->
                            <select name="Organization[state]" id="Organization_state">
<option value="">State*</option>
<option value="AL">AL</option>
<option value="AK">AK</option>
<option value="AS">AS</option>
<option value="AZ">AZ</option>
<option value="AR">AR</option>
<option value="AA">AA</option>
<option value="AE">AE</option>
<option value="AP">AP</option>
<option value="CA">CA</option>
<option value="CO">CO</option>
<option value="CT">CT</option>
<option value="DE">DE</option>
<option value="DC">DC</option>
<option value="FM">FM</option>
<option value="FL">FL</option>
<option value="GA">GA</option>
<option value="GU">GU</option>
<option value="Guam">Guam</option>
<option value="HI">HI</option>
<option value="ID">ID</option>
<option value="IL">IL</option>
<option value="IN">IN</option>
<option value="IA">IA</option>
<option value="KS">KS</option>
<option value="KY">KY</option>
<option value="LA">LA</option>
<option value="ME">ME</option>
<option value="MH">MH</option>
<option value="MD">MD</option>
<option value="MA">MA</option>
<option value="MI">MI</option>
<option value="MN">MN</option>
<option value="MS">MS</option>
<option value="MO">MO</option>
<option value="MT">MT</option>
<option value="NE">NE</option>
<option value="NV">NV</option>
<option value="NH">NH</option>
<option value="NJ">NJ</option>
<option value="NM">NM</option>
<option value="NY">NY</option>
<option value="NC">NC</option>
<option value="ND">ND</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="MP">MP</option>
<option value="OH">OH</option>
<option value="OK">OK</option>
<option value="OR">OR</option>
<option value="PW">PW</option>
<option value="PA">PA</option>
<option value="PR">PR</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="RI">RI</option>
<option value="Samoa">Samoa</option>
<option value="SC">SC</option>
<option value="SD">SD</option>
<option value="TN">TN</option>
<option value="TX">TX</option>
<option value="UT">UT</option>
<option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
<option value="VT">VT</option>
<option value="VI">VI</option>
<option value="VA">VA</option>
<option value="WA">WA</option>
<option value="WV">WV</option>
<option value="WI">WI</option>
<option value="WY">WY</option>
</select>                        </div>
                        <div class="col-4 pl-0 pr-0">
                            <!-- <input type="text" autocomplete="off" placeholder="Zip*" maxlength="" id="" value=""> -->
                            <input size="5" maxlength="255" placeholder="Zip*" name="Organization[zip]" id="Organization_zip" type="text">                        </div>
                    </div>
                    <div class="row phone-numb-validate-add">
                        <div class="col-4 pl-0 icon-txtbox">
                            <img src="https://rmsstaging.hatchearlychildhood.com/images/insight/PhoneIconLarge.png" alt="">
                            <!-- <input type="text" autocomplete="off" placeholder="Phone*" maxlength="" id="" value=""> -->
                            <input size="15" maxlength="255" placeholder="Phone*" name="Organization[phone]" id="Organization_phone" type="text">                        </div>
                    </div>
                    <div class="row mb-3 mt-4 no-gutters align-items-center assigned-csm">
                        <div class="csm-label"><label for="" class="fw-600">Assigned CSM:</label></div>
                        <div class="csm-input">
                        <input size="100" maxlength="255" placeholder="Full first and last name" name="Organization[assigned_csm]" id="Organization_assigned_csm" type="text">                        <!-- <div class="col-9"><input type="text" name="assigned_csm" placeholder="Full first name and last name" class="form-control" id="assigned_csm"></div>
                    </div> -->
                    </div>
                </div>
                <div class="customer-type-row">
                    <div class="form-group">
                        <div class="education_category_dropdown"><select id="education_category_dropdown" class="overview_filter 3col active jqmsLoaded ms-list-1" multiple="multiple" name="Organization[education_category][]" style="display: none;">
<option value="1">Headstart</option>
<option value="2">Pre k</option>
<option value="3">Public school</option>
<option value="4">Private Daycare</option>
<option value="5">K Program</option>
<option value="6">Other</option>
</select><div id="ms-list-1" class="ms-options-wrap"><button type="button"><span class="selected_options">Education Category</span></button><div class="ms-options" style="min-height: 200px; max-height: 4709px;"><ul style="column-gap: 0px;"><li data-search-term="headstart"><label for="ms-opt-1" title="Headstart"><input type="checkbox" title="Headstart" id="ms-opt-1" value="1">Headstart<span class="checkmark"></span></label></li><li data-search-term="pre k"><label for="ms-opt-2" title="Pre k"><input type="checkbox" title="Pre k" id="ms-opt-2" value="2">Pre k<span class="checkmark"></span></label></li><li data-search-term="public school"><label for="ms-opt-3" title="Public school"><input type="checkbox" title="Public school" id="ms-opt-3" value="3">Public school<span class="checkmark"></span></label></li><li data-search-term="private daycare"><label for="ms-opt-4" title="Private Daycare"><input type="checkbox" title="Private Daycare" id="ms-opt-4" value="4">Private Daycare<span class="checkmark"></span></label></li><li data-search-term="k program"><label for="ms-opt-5" title="K Program"><input type="checkbox" title="K Program" id="ms-opt-5" value="5">K Program<span class="checkmark"></span></label></li><li data-search-term="other"><label for="ms-opt-6" title="Other"><input type="checkbox" title="Other" id="ms-opt-6" value="6">Other<span class="checkmark"></span></label></li></ul></div></div></div>                    </div>
                    <div class="form-group">
                        <!-- <select id="" class="" name="">
                            <option value="">Customer Segment</option>
                        </select> -->
                        <select name="Organization[customer_segment_id]" id="Organization_customer_segment_id">
<option value="">Customer Segment*</option>
<option value="1">Tier I</option>
<option value="2">Tier II</option>
<option value="3">Tier III</option>
</select>                    </div>
                    <div class="form-group">
                        <!-- <select id="" class="" name="">
                            <option value="">Service Category </option>
                        </select> -->
                        <select name="Organization[service_category]" id="Organization_service_category">
<option value="" selected="selected">Service Category</option>
<option value="HPP">HPP</option>
</select>                    </div>
                </div>
                <!-- <div class="form-group">
                    <div class="row">
                        <div class="col-lg-6 pl-0">
                            <div class="checkbox-div" tabindex="11">
                                <input id="pilot" name="pilot" type="checkbox" value="0">
                                                                <label for="pilot" class="label-18">Pilot</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 pl-0">
                            <div class="checkbox-div" tabindex="11">
                                <input id="sample_test" name="sample_test" type="checkbox" value="0">
                                                                <label for="sample_test" class="label-18">Test</label>
                            </div>
                        </div>
                    </div>
                </div> -->
                <strong class="greentext header-label">Activation</strong>
                <div class="form-group mt-2">
                    <div class="row">
                        <div class="col-lg-6 pl-0">
                            <div class="checkbox-div" tabindex="11">
                                <input id="is_active" name="is_active" type="checkbox" checked="">
                                                                <label for="is_active" class="label-18">Activated</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group add-org-top-border" id="ignite_license_sec">
                    <strong class="greentext header-label"> Ignite License</strong>
                    <div class="row ignite-switch">
                        <label for="" class="fw-600">Ignite License Purchased?</label>
                        <div class="col-lg-12 p-0">
                            <div class="row">
                                <label for="" class="fs-18">
                                    No
                                </label>
                                <label class="switch mx-2">
                                    <!-- <input type="checkbox" id="chkbx_send_email"> -->
                                    <input id="ytOrganization_is_ignite_license" type="hidden" value="0" name="Organization[is_ignite_license]"><input class="form-check-input" name="Organization[is_ignite_license]" id="Organization_is_ignite_license" value="1" type="checkbox">                                    <span class="slider round "></span>
                                </label>
                                <label for="" class="fs-18">
                                    Yes
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Start Date (MM/DD/YY)*</label>
                            <!-- <input type="text" autocomplete="off" placeholder="" class="datepicker" id="lic_start_date" name="lic_start_date" value=""> -->
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[ignite_lic_start_date]" id="Organization_ignite_lic_start_date" type="text">                                                    </div>
                        <div class="col-4 pl-0">
                            <label class="fw-600">End Date (MM/DD/YY)*</label>
                            <!-- <input type="text" autocomplete="off" placeholder="" class="datepicker" id="lic_expiry_date" name="lic_expiry_date" value=""> -->
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[ignite_lic_expiry_date]" id="Organization_ignite_lic_expiry_date" type="text">                                                    </div>
                        <div class="col-4 pl-0 pr-0 text-right">
                            <label class="fw-600">Duration (months)</label>
                            <div class="count-bottom-val" id="lic_duration"><label></label></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Purchased Child Seats*</label>
                            <!-- <input type="text" autocomplete="off" placeholder="" maxlength="3" id="" value=""> -->
                            <input size="8" integeronly="1" min="0" name="Organization[childLic]" id="Organization_childLic" type="text">                        </div>
                    </div>
                                    </div>
                <!-- Start Hatchsync for ignite section -->
                <div class="form-group" id="hatchsync_ignite_sec">
                    <div class="row ignite-switch">
                        <label for="" class="fw-600">HatchSync for Ignite</label>
                        <div class="col-lg-12 p-0">
                            <div class="row">
                                <label for="" class="fs-18">
                                    No
                                </label>
                                <label class="switch mx-2">
                                    <!-- <input type="checkbox" id="chkbx_send_email"> -->
                                    <input id="ytOrganization_is_hatchsync_ignite" disabled="disabled" type="hidden" value="0" name="Organization[is_hatchsync_ignite]"><input class="form-check-input" disabled="disabled" name="Organization[is_hatchsync_ignite]" id="Organization_is_hatchsync_ignite" value="1" type="checkbox">                                    <span class="slider round "></span>
                                </label>
                                <label for="" class="fs-18">
                                    Yes
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row hatchsync-ignite-data-section hide">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Start Date (MM/DD/YY)*</label>
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[hatchsync_ignite_start_date]" id="Organization_hatchsync_ignite_start_date" type="text">                        </div>
                        <div class="col-4 pl-0">
                            <label class="fw-600">End Date (MM/DD/YY)*</label>
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[hatchsync_ignite_expiry_date]" id="Organization_hatchsync_ignite_expiry_date" type="text">                        </div>
                        <div class="col-4 pl-0">
                            <label class="fw-600">Notification Date (MM/DD/YY)</label>
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[hatchsync_ignite_notification_date]" id="Organization_hatchsync_ignite_notification_date" type="text">                        </div>
                    </div>
                    <div class="row hatchsync-ignite-data-section hide">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Number of Children*</label>
                            <!-- <input type="text" autocomplete="off" placeholder="" maxlength="3" id="" value=""> -->
                            <input size="8" integeronly="1" min="0" name="Organization[hatchsyncIgniteChildren]" id="Organization_hatchsyncIgniteChildren" type="text">                        </div>
                    </div>
                </div>
                <!-- End Hatchsync for ignite section -->
                <!-- Start CodeEd Addon section -->
                <div class="form-group" id="codeEd_addon_sec">
                    <div class="row ignite-switch">
                        <label for="" class="fw-600">Code-Ed Partnership?</label>
                        <div class="col-lg-12 p-0">
                            <div class="row">
                                <label for="" class="fs-18">
                                    No
                                </label>
                                <label class="switch mx-2">
                                    <input id="ytOrganization_is_codeEd_addon" type="hidden" value="0" name="Organization[is_codeEd_addon]"><input class="form-check-input" name="Organization[is_codeEd_addon]" id="Organization_is_codeEd_addon" value="1" type="checkbox">                                    <span class="slider round "></span>
                                </label>
                                <label for="" class="fs-18">
                                    Yes
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row codeEd-data-section hide">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Start Date (MM/DD/YY)*</label>
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[codeEd_addon_start_date]" id="Organization_codeEd_addon_start_date" type="text">                        </div>
                        <div class="col-4 pl-0">
                            <label class="fw-600">End Date (MM/DD/YY)*</label>
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[codeEd_addon_expiry_date]" id="Organization_codeEd_addon_expiry_date" type="text">                        </div>
                        <div class="col-4 pl-0 pr-0 text-right">
                            <label class="fw-600">Duration (months)</label>
                            <div class="count-bottom-val" id="codeEd_addon_duration"><label></label></div>
                        </div>
                    </div>
                    <div class="row codeEd-data-section hide">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Purchased Child Seats*</label>
                            <!-- <input type="text" autocomplete="off" placeholder="" maxlength="3" id="" value=""> -->
                            <input size="8" integeronly="1" min="0" name="Organization[childSeatsCodeEdAddon]" id="Organization_childSeatsCodeEdAddon" type="text">                        </div>
                    </div>
                    <div class="row codeEd-data-section hide">
                        <div class="col-4 pl-0">
                            <label class="fw-600"># of Units*</label>
                            <!-- <input type="text" autocomplete="off" placeholder="" maxlength="3" id="" value=""> -->
                            <input size="8" integeronly="1" min="0" name="Organization[unitsCodeEdAddon]" id="Organization_unitsCodeEdAddon" type="text">                        </div>
                    </div>
                </div>
                <!-- End CodeEd Addon section -->
                <!-- Start Ignite table section -->
                <div class="form-group add-org-top-border org-radio-btn" id="ignite_license_sec">
                    <strong class="greentext header-label"> IgniteTable License</strong>
                    <div class="row ignite-switch">
                        <label for="" class="fw-600">IgniteTable License Purchased?</label>
                        <div class="col-lg-12 p-0">
                            <div class="row">
                                <label for="" class="fs-18">
                                    No
                                </label>
                                <label class="switch mx-2">
                                    <!-- <input type="checkbox" id="chkbx_send_email"> -->
                                    <input id="ytOrganization_is_igniteTable_license" type="hidden" value="0" name="Organization[is_igniteTable_license]"><input name="Organization[is_igniteTable_license]" id="Organization_is_igniteTable_license" value="1" type="checkbox">                                    <span class="slider round "></span>
                                </label>
                                <label for="" class="fs-18">
                                    Yes
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row ignite-switch">
                        <label for="" class="fw-600">License Feature</label>
                        <div class="col-lg-12 p-0">
                            <div class="row custom-green-radio-button">
                                <input id="Organization_license_type_paid" value="PAID" name="Organization[license_type]" type="radio"> 
                                <label class="switch- mx-2" for="Organization_license_type_paid">Paid</label>
                            </div>
                            <div class="row custom-green-radio-button">
                                <input id="Organization_license_type_free" value="FREE" name="Organization[license_type]" type="radio"> 
                                <label class="switch- mx-2" for="Organization_license_type_free">Free</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Start Date (MM/DD/YY)*</label>
                            <!-- <input type="text" autocomplete="off" placeholder="" class="datepicker" id="lic_start_date" name="lic_start_date" value=""> -->
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[igniteTable_lic_start_date]" id="Organization_igniteTable_lic_start_date" type="text">                        </div>
                        <div class="col-4 pl-0">
                            <label class="fw-600">End Date (MM/DD/YY)*</label>
                            <!-- <input type="text" autocomplete="off" placeholder="" class="datepicker" id="lic_expiry_date" name="lic_expiry_date" value=""> -->
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[igniteTable_lic_expiry_date]" id="Organization_igniteTable_lic_expiry_date" type="text">                                                    </div>
                        <div class="col-4 pl-0 pr-0 text-right">
                            <label class="fw-600">Duration (months)</label>
                            <div class="count-bottom-val" id="igniteTable_lic_duration"><label></label></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Purchased Child Seats*</label>
                            <!-- <input type="text" autocomplete="off" placeholder="" maxlength="3" id="" value=""> -->
                            <input size="8" integeronly="1" min="0" name="Organization[childLicIgniteTable]" id="Organization_childLicIgniteTable" type="text">                        </div>
                        <div class="col-4 pl-0 pr-0 text-right">
                            <label class="fw-600">Active Children Added</label>
                            <div class="count-bottom-val"><label></label></div>
                        </div>
                        <div class="col-4 pl-0 pr-0 text-right">
                            <label class="fw-600">Child Seats Used</label>
                            <div class="count-bottom-val"><label></label></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Device Count*</label>
                            <input size="8" integeronly="1" min="0" name="Organization[device_count]" id="Organization_device_count" type="text">                        </div>
                    </div>
                                    </div>
                <!-- End igniteTable license -->
                <!-- Start Hatchsync for igniteTable section -->
                <div class="form-group" id="hatchsync_ignitetable_sec">
                    <div class="row ignite-switch">
                        <label for="" class="fw-600">HatchSync for IgniteTable</label>
                        <div class="col-lg-12 p-0">
                            <div class="row">
                                <label for="" class="fs-18">
                                    No
                                </label>
                                <label class="switch mx-2">
                                    <!-- <input type="checkbox" id="chkbx_send_email"> -->
                                    <input id="ytOrganization_is_hatchsync_ignitetable" disabled="disabled" type="hidden" value="0" name="Organization[is_hatchsync_ignitetable]"><input class="form-check-input" disabled="disabled" name="Organization[is_hatchsync_ignitetable]" id="Organization_is_hatchsync_ignitetable" value="1" type="checkbox">                                    <span class="slider round "></span>
                                </label>
                                <label for="" class="fs-18">
                                    Yes
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row hatchsync-ignitetable-data-section hide">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Start Date (MM/DD/YY)*</label>
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[hatchsync_ignitetable_start_date]" id="Organization_hatchsync_ignitetable_start_date" type="text">                        </div>
                        <div class="col-4 pl-0">
                            <label class="fw-600">End Date (MM/DD/YY)*</label>
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[hatchsync_ignitetable_expiry_date]" id="Organization_hatchsync_ignitetable_expiry_date" type="text">                        </div>
                        <div class="col-4 pl-0">
                            <label class="fw-600">Notification Date (MM/DD/YY)</label>
                            <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[hatchsync_ignitetable_notification_date]" id="Organization_hatchsync_ignitetable_notification_date" type="text">                        </div>
                    </div>
                    <div class="row hatchsync-ignitetable-data-section hide">
                        <div class="col-4 pl-0">
                            <label class="fw-600">Number of Children*</label>
                            <!-- <input type="text" autocomplete="off" placeholder="" maxlength="3" id="" value=""> -->
                            <input size="8" integeronly="1" min="0" name="Organization[hatchsyncIgnitetableChildren]" id="Organization_hatchsyncIgnitetableChildren" type="text">                        </div>
                    </div>
                </div>
                <!-- End Hatchsync for igniteTable section -->
                                <!-- end igniteTable license -->

                <!-- Sprint 78 - Add Organization : IgnitePanel License START ---------- -->
                <div class="form-group add-org-top-border org-radio-btn" id="ignite_license_sec">
                     <strong class="greentext header-label">IgnitePanel License</strong>
                        <div class="row ignite-switch">
                            <label for="" class="fw-600">IgnitePanel License Purchased?</label>
                            <div class="col-lg-12 p-0">
                                <div class="row">
                                    <label for="" class="fs-18">
                                        No
                                    </label>
                                    <label class="switch mx-2">
                                        <!-- <input type="checkbox" id="chkbx_send_email"> -->
                                        <input id="ytOrganization_is_ignitePanel_license" type="hidden" value="0" name="Organization[is_ignitePanel_license]"><input name="Organization[is_ignitePanel_license]" id="Organization_is_ignitePanel_license" value="1" type="checkbox">                                        <span class="slider round "></span>
                                    </label>
                                    <label for="" class="fs-18">
                                        Yes
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row ignite-switch">
                        <label for="" class="fw-600">License Feature</label>
                        <div class="col-lg-12 p-0">
                            <div class="row custom-green-radio-button">
                                <input id="Organization_ignitePanel_license_type_paid" value="PAID" name="Organization[ignitePanel_license_type]" type="radio"> 
                                <label class="switch- mx-2" for="Organization_ignitePanel_license_type_paid">Paid</label>
                            </div>
                            <div class="row custom-green-radio-button">
                                <input id="Organization_ignitePanel_license_type_free" value="FREE" name="Organization[ignitePanel_license_type]" type="radio"> 
                                <label class="switch- mx-2" for="Organization_ignitePanel_license_type_free">Free</label>
                            </div>
                            <div class="ml-3 pl-2">
                                <div class="col-lg-12 pl-0 mt-2">
                                    <div class="checkbox-div" tabindex="11">
                                        <input id="isCoreFocus" name="isCoreFocus" type="checkbox">
                                                                                <label for="isCoreFocus" class="label-18">CoreFocus</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 pl-0 mt-2">
                                    <div class="checkbox-div" tabindex="11">
                                        <input id="isTeachSmart" name="isTeachSmart" type="checkbox">
                                                                                <label for="isTeachSmart" class="label-18"> TeachSmart </label>
                                    </div>
                                </div>
                                <div class="col-lg-12 pl-0 mt-2">
                                    <div class="checkbox-div" tabindex="11">
                                        <input id="isTeachSmartELL" name="isTeachSmartELL" type="checkbox">
                                                                                <label for="isTeachSmartELL" class="label-18">TeachSmart ELL</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 pl-0">
                                    <label class="fw-600">Start Date (MM/DD/YY)*</label>
                                    <!-- <input type="text" autocomplete="off" placeholder="" class="datepicker" id="Organization_ignitePanel_lgp_lic_start_date" name="lic_start_date" value=""> -->
                                    <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[ignitePanel_lic_start_date]" id="Organization_ignitePanel_lic_start_date" type="text">                                </div>
                                <div class="col-4 pl-0">
                                    <label class="fw-600">End Date (MM/DD/YY)*</label>
                                    <!-- <input type="text" autocomplete="off" placeholder="" class="datepicker" id="Organization_ignitePanel_lgp_lic_expiry_date" name="lic_expiry_date" value=""> -->
                                    <input class="datepicker hasDatepicker" autocomplete="off" name="Organization[ignitePanel_lic_expiry_date]" id="Organization_ignitePanel_lic_expiry_date" type="text">                                                                    </div>
                                <div class="col-4 pl-0 pr-0 text-right">
                                    <label class="fw-600">Duration (months)</label>
                                    <div class="count-bottom-val" id="ignitePanel_lic_duration"><label></label></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 pl-0">
                                    <label class="fw-600">Purchased Child Seats*</label>
                                    <!-- <input type="text" autocomplete="off" placeholder="" maxlength="3" id="" value=""> -->
                                    <input size="8" integeronly="1" min="0" name="Organization[childLicIgnitePanel]" id="Organization_childLicIgnitePanel" type="text">                                </div>
                                <div class="col-4 pl-0 pr-0 text-right">
                                    <label class="fw-600">Active Children Added</label>
                                    <div class="count-bottom-val"><label></label></div>
                                </div>
                                <div class="col-4 pl-0 pr-0 text-right">
                                    <label class="fw-600">Child Seats Used</label>
                                    <div class="count-bottom-val"><label></label></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 pl-0">
                                    <label class="fw-600">Device Count*</label>
                                    <input size="8" integeronly="1" min="0" name="Organization[ignitePanel_device_count]" id="Organization_ignitePanel_device_count" type="text">                                </div>
                            </div>
                            



                        </div>
                    </div>
                </div>
                <!-- Sprint 78 - Add Organization:IgnitePanel License END ---------- -->
            
        </div>

        <div class="row mt-3 add-org-top-border">
        <div class="col-lg-6 col-md-6 pr-0">
            <div class="form-group mb-3" id="organization_counts_sec">
                <strong class="greentext header-label"> Organization Counts:</strong>
                <div class="row">
                    <div class="col-4 pl-0">
                        <label class="fw-600"># Ignite Teachers</label>
                        <!-- <input type="text" autocomplete="off" placeholder="" id="" value=""> -->
                        <input size="8" integeronly="1" min="0" name="Organization[ignite_teachers]" id="Organization_ignite_teachers" type="text">                    </div>
                </div>
                <div class="row">
                    <div class="col-4 pl-0 mt-2">
                        <label class="fw-600"># Ignite Classrooms</label>
                        <!-- <input type="text" autocomplete="off" placeholder="" id="" value=""> -->
                        <input size="8" integeronly="1" min="0" name="Organization[ignite_classrooms]" id="Organization_ignite_classrooms" type="text">                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-12 pl-0 mt-2">
                        <div class="checkbox-div" tabindex="11">
                            <!-- <input id="Organization_Administrator_Added" name="" type="checkbox" checked=""> -->
                            <input name="Organization[hasOrganizationAdmin]" id="Organization_hasOrganizationAdmin" value="1" type="checkbox" disabled="" style="width:auto;">
                            <label for="Organization_hasOrganizationAdmin" class="label-18">Organization Administrator Added? </label>
                        </div>
                    </div>
                    <div class="col-lg-12 pl-0 mt-2">
                        <div class="checkbox-div" tabindex="11">
                            <!-- <input id="Hatch_Champion_Added" name="" type="checkbox" checked=""> -->
                            <input name="Organization[hasHatchChampion]" id="Organization_hasHatchChampion" value="1" type="checkbox" disabled="" style="width:auto;">
                            <label for="Organization_hasHatchChampion" class="label-18">Hatch Champion Added? </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row mt-4" id="device_option_sec">
                    <strong class="greentext header-label"> Device Option*</strong>
                    <div class="col-lg-12 pl-0 mt-2">
                        <div class="checkbox-div" tabindex="11">
                            <input id="isHatchDevice" name="isHatchDevice" type="checkbox">
                                                        <label for="isHatchDevice" class="label-18"> Hatch device </label>
                        </div>
                    </div>
                    <div class="col-lg-12 pl-0 mt-2">
                        <div class="checkbox-div" tabindex="11">
                            <input id="isAppOnly" name="isAppOnly" type="checkbox">
                                                        <label for="isAppOnly" class="label-18">App</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right side column -->
        <div class="col-lg-6 col-md-6 pr-0">
            <strong class="greentext header-label"> Optional Counts:</strong>
            <div class="form-group">
                <div class="row">
                    <div class="col-4 pl-0">
                        <label class="fw-600"> # Total Children</label>
                        <!-- <input type="text" autocomplete="off" placeholder="" id="" value=""> -->
                        <input size="8" integeronly="1" min="0" name="Organization[total_children]" id="Organization_total_children" type="text">                    </div>
                </div>
                <div class="row mt-2 mb-2">
                    <div class="col-4 pl-0">
                        <label class="fw-600"> # Total Teachers</label>
                        <!-- <input type="text" autocomplete="off" placeholder="" id="" value=""> -->
                        <input size="8" integeronly="1" min="0" name="Organization[total_teachers]" id="Organization_total_teachers" type="text">                    </div>
                </div>
                <div class="row">
                    <div class="col-4 pl-0">
                        <label class="fw-600"># Total Classrooms</label>
                        <!-- <input type="text" autocomplete="off" placeholder="" id="" value=""> -->
                        <input size="8" integeronly="1" min="0" name="Organization[total_classrooms]" id="Organization_total_classrooms" type="text">                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
 
    <!--########### User access row #########33-->
    <div class="row mt-4  align-items-center user-access-row" id="user_access_sec">
        <div class="col-lg-6 col-md-6">
            <strong class="greentext header-label"> User Access</strong>
            <!-- <div class="form-group"> -->
                <!-- <div class="row"> -->
                    <!-- <div class="col-12 pl-0">
                        <label class="fw-600"> CSMs with Access </label>
                        <select multiple="multiple" id="csm_selection" size="3">
                            <option value="#" disabled>Select CSMs that can access this Org</option>
                                                            <option value=""></option>
                                                    </select>
                        <input type="hidden" id="csm_selection_hide_val" name="selected_csm" value=""/>
                    </div> -->
                <!-- </div> -->
            <!-- </div> -->
        </div>
        <div>
            <!-- <div class="form-group m-0">
                <div class="row">
                    <div class="col-12 pl-0 pt-3" class="drop-italic-values">
                        <label class="fs-16" id="CSM_selected_names"> <i></i></label>
                    </div>
                </div>
            </div> -->
        </div>
        <div>
            <!-- <div class="form-group"> -->
                <!-- <div class="row"> -->
                    <!-- <div class="col-12 pl-0">
                        <label class="fw-600"> Sales Reps with Access: </label>
                        <select multiple="multiple" id="salesRep_selection" size="3">
                        <option value="#" disabled>Select Sales Reps that can access this Org</option>
                                                            <option value=""></option>
                                                    </select>
                        <input type="hidden" id="salesRep_selection_hide_val" name="selected_salesRep" value=""/>
                    </div> -->
                <!-- </div> -->

                <!-- <div class="row" style="display: none;">
                    <div class="col-12 pl-0">
                    </div>
                </div> -->
            <!-- </div> -->
        </div>
        <div class="col-lg-6 col-md-6">
            <!-- <div class="form-group m-0">
                <div class="row">
                    <div class="col-12 pl-0 pt-3" class="drop-italic-values">
                        <label class="fs-16" id="salesReps_selected_names"> <i> </i></label>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="col-lg-6 col-md-6">
            <div class="form-group">
                <div class="row" id="multiOrgViewer_org_sec">
                    <div class="col-12 pl-0">
                        <strong class="greentext header-label"></strong>
                        <div class="col-lg-12 pl-0 mt-2">
                            <div class="checkbox-div" tabindex="11">
                                                                    <input id="isMultiOrgViewerOrg" name="isMultiOrgViewerOrg" type="checkbox">
                                    
                                                                <label for="isMultiOrgViewerOrg" class="label-18"> Multi-Org Viewer Permission Granted </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="display: none;">
                    <div class="col-12 pl-0">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6">
            <div class="form-group m-0" style="display: none;">
                <div class="row">
                    <div class="col-12 pl-0 pt-3">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6">
            <div class="form-group">
                <div class="row">
                    <div class="col-12 pl-0">
                        <label class="fw-600">Multi-Org Viewers with Access </label>
                        <select class="bg-img-none" multiple="multiple" id="multiOrgAdmin_selection" disabled="disabled">
                        <option value="#" disabled="">Select one or more Multi-Org Viewers</option>
                                                            <option value="57331">57331IQEP7ENP 57331GTPJIVAH</option>
                                                            <option value="1325092">13250920H2Y3DWN 1325092OXE67156</option>
                                                            <option value="1325106">132510639PQ9K3V 1325106BLGCLO6F</option>
                                                            <option value="1325220">1325220RR36T7LX 1325220K8YHUOL8</option>
                                                            <option value="1328368">13283681IOG1DV2 1328368V3B496GO</option>
                                                            <option value="1328429">1328429MPFQ2CLZ 1328429NHE1EMVY</option>
                                                            <option value="1440854">Muti-org viewer</option>
                                                            <option value="1514320">usman khawaja</option>
                                                            <option value="1517957">Multi_org View</option>
                                                            <option value="1518994">Melanie Velasquez</option>
                                                            <option value="1539097">Jonathon Whalen</option>
                                                            <option value="2254198">Ralph Hunt</option>
                                                            <option value="2254199">Naomi Herbert</option>
                                                    </select>
                        <input type="hidden" id="multiOrgAdmin_selection_hide_val" name="selected_multiOrgAdmin" value="">
                    </div>
                </div>

                <div class="row" style="display: none;">
                    <div class="col-12 pl-0">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6">
            <div class="form-group m-0">
                <div class="row">
                    <div class="col-12 pl-0 pt-3">
                        <label class="fs-16" id="multiOrgAdmin_selected_names"> <i> </i></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
`;