// EDIT -> ELEMENTS
var elements = [
    '<input type="text">',
    '<input type="text">',
    '<input type="text">',
    '<input type="text">',
    '<select>' +
    '<option value="">Select Country</option> \n' +
    '<option value="United States">United States</option> \n' +
    '<option value="United Kingdom">United Kingdom</option> \n' +
    '<option value="Afghanistan">Afghanistan</option> \n' +
    '<option value="Albania">Albania</option> \n' +
    '<option value="Algeria">Algeria</option> \n' +
    '<option value="American Samoa">American Samoa</option> \n' +
    '<option value="Andorra">Andorra</option> \n' +
    '<option value="Angola">Angola</option> \n' +
    '<option value="Anguilla">Anguilla</option> \n' +
    '<option value="Antarctica">Antarctica</option> \n' +
    '<option value="Antigua and Barbuda">Antigua and Barbuda</option> \n' +
    '<option value="Argentina">Argentina</option> \n' +
    '<option value="Armenia">Armenia</option> \n' +
    '<option value="Aruba">Aruba</option> \n' +
    '<option value="Australia">Australia</option> \n' +
    '<option value="Austria">Austria</option> \n' +
    '<option value="Azerbaijan">Azerbaijan</option> \n' +
    '<option value="Bahamas">Bahamas</option> \n' +
    '<option value="Bahrain">Bahrain</option> \n' +
    '<option value="Bangladesh">Bangladesh</option> \n' +
    '<option value="Barbados">Barbados</option> \n' +
    '<option value="Belarus">Belarus</option> \n' +
    '<option value="Belgium">Belgium</option> \n' +
    '<option value="Belize">Belize</option> \n' +
    '<option value="Benin">Benin</option> \n' +
    '<option value="Bermuda">Bermuda</option> \n' +
    '<option value="Bhutan">Bhutan</option> \n' +
    '<option value="Bolivia">Bolivia</option> \n' +
    '<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> \n' +
    '<option value="Botswana">Botswana</option> \n' +
    '<option value="Bouvet Island">Bouvet Island</option> \n' +
    '<option value="Brazil">Brazil</option> \n' +
    '<option value="British Indian Ocean Territory">British Indian Ocean Territory</option> \n' +
    '<option value="Brunei Darussalam">Brunei Darussalam</option> \n' +
    '<option value="Bulgaria">Bulgaria</option> \n' +
    '<option value="Burkina Faso">Burkina Faso</option> \n' +
    '<option value="Burundi">Burundi</option> \n' +
    '<option value="Cambodia">Cambodia</option> \n' +
    '<option value="Cameroon">Cameroon</option> \n' +
    '<option value="Canada">Canada</option> \n' +
    '<option value="Cape Verde">Cape Verde</option> \n' +
    '<option value="Cayman Islands">Cayman Islands</option> \n' +
    '<option value="Central African Republic">Central African Republic</option> \n' +
    '<option value="Chad">Chad</option> \n' +
    '<option value="Chile">Chile</option> \n' +
    '<option value="China">China</option> \n' +
    '<option value="Christmas Island">Christmas Island</option> \n' +
    '<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> \n' +
    '<option value="Colombia">Colombia</option> \n' +
    '<option value="Comoros">Comoros</option> \n' +
    '<option value="Congo">Congo</option> \n' +
    '<option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> \n' +
    '<option value="Cook Islands">Cook Islands</option> \n' +
    '<option value="Costa Rica">Costa Rica</option> \n' +
    '<option value="Cote D\'ivoire">Cote D\'ivoire</option> \n' +
    '<option value="Croatia">Croatia</option> \n' +
    '<option value="Cuba">Cuba</option> \n' +
    '<option value="Cyprus">Cyprus</option> \n' +
    '<option value="Czech Republic">Czech Republic</option> \n' +
    '<option value="Denmark">Denmark</option> \n' +
    '<option value="Djibouti">Djibouti</option> \n' +
    '<option value="Dominica">Dominica</option> \n' +
    '<option value="Dominican Republic">Dominican Republic</option> \n' +
    '<option value="Ecuador">Ecuador</option> \n' +
    '<option value="Egypt">Egypt</option> \n' +
    '<option value="El Salvador">El Salvador</option> \n' +
    '<option value="Equatorial Guinea">Equatorial Guinea</option> \n' +
    '<option value="Eritrea">Eritrea</option> \n' +
    '<option value="Estonia">Estonia</option> \n' +
    '<option value="Ethiopia">Ethiopia</option> \n' +
    '<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> \n' +
    '<option value="Faroe Islands">Faroe Islands</option> \n' +
    '<option value="Fiji">Fiji</option> \n' +
    '<option value="Finland">Finland</option> \n' +
    '<option value="France">France</option> \n' +
    '<option value="French Guiana">French Guiana</option> \n' +
    '<option value="French Polynesia">French Polynesia</option> \n' +
    '<option value="French Southern Territories">French Southern Territories</option> \n' +
    '<option value="Gabon">Gabon</option> \n' +
    '<option value="Gambia">Gambia</option> \n' +
    '<option value="Georgia">Georgia</option> \n' +
    '<option value="Germany">Germany</option> \n' +
    '<option value="Ghana">Ghana</option> \n' +
    '<option value="Gibraltar">Gibraltar</option> \n' +
    '<option value="Greece">Greece</option> \n' +
    '<option value="Greenland">Greenland</option> \n' +
    '<option value="Grenada">Grenada</option> \n' +
    '<option value="Guadeloupe">Guadeloupe</option> \n' +
    '<option value="Guam">Guam</option> \n' +
    '<option value="Guatemala">Guatemala</option> \n' +
    '<option value="Guinea">Guinea</option> \n' +
    '<option value="Guinea-bissau">Guinea-bissau</option> \n' +
    '<option value="Guyana">Guyana</option> \n' +
    '<option value="Haiti">Haiti</option> \n' +
    '<option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> \n' +
    '<option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> \n' +
    '<option value="Honduras">Honduras</option> \n' +
    '<option value="Hong Kong">Hong Kong</option> \n' +
    '<option value="Hungary">Hungary</option> \n' +
    '<option value="Iceland">Iceland</option> \n' +
    '<option value="India">India</option> \n' +
    '<option value="Indonesia">Indonesia</option> \n' +
    '<option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> \n' +
    '<option value="Iraq">Iraq</option> \n' +
    '<option value="Ireland">Ireland</option> \n' +
    '<option value="Israel">Israel</option> \n' +
    '<option value="Italy">Italy</option> \n' +
    '<option value="Jamaica">Jamaica</option> \n' +
    '<option value="Japan">Japan</option> \n' +
    '<option value="Jordan">Jordan</option> \n' +
    '<option value="Kazakhstan">Kazakhstan</option> \n' +
    '<option value="Kenya">Kenya</option> \n' +
    '<option value="Kiribati">Kiribati</option> \n' +
    '<option value="Korea, Democratic People\'s Republic of">Korea, Democratic People\'s Republic of</option> \n' +
    '<option value="Korea, Republic of">Korea, Republic of</option> \n' +
    '<option value="Kuwait">Kuwait</option> \n' +
    '<option value="Kyrgyzstan">Kyrgyzstan</option> \n' +
    '<option value="Lao People\'s Democratic Republic">Lao People\'s Democratic Republic</option> \n' +
    '<option value="Latvia">Latvia</option> \n' +
    '<option value="Lebanon">Lebanon</option> \n' +
    '<option value="Lesotho">Lesotho</option> \n' +
    '<option value="Liberia">Liberia</option> \n' +
    '<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> \n' +
    '<option value="Liechtenstein">Liechtenstein</option> \n' +
    '<option value="Lithuania">Lithuania</option> \n' +
    '<option value="Luxembourg">Luxembourg</option> \n' +
    '<option value="Macao">Macao</option> \n' +
    '<option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option> \n' +
    '<option value="Madagascar">Madagascar</option> \n' +
    '<option value="Malawi">Malawi</option> \n' +
    '<option value="Malaysia">Malaysia</option> \n' +
    '<option value="Maldives">Maldives</option> \n' +
    '<option value="Mali">Mali</option> \n' +
    '<option value="Malta">Malta</option> \n' +
    '<option value="Marshall Islands">Marshall Islands</option> \n' +
    '<option value="Martinique">Martinique</option> \n' +
    '<option value="Mauritania">Mauritania</option> \n' +
    '<option value="Mauritius">Mauritius</option> \n' +
    '<option value="Mayotte">Mayotte</option> \n' +
    '<option value="Mexico">Mexico</option> \n' +
    '<option value="Micronesia, Federated States of">Micronesia, Federated States of</option> \n' +
    '<option value="Moldova, Republic of">Moldova, Republic of</option> \n' +
    '<option value="Monaco">Monaco</option> \n' +
    '<option value="Mongolia">Mongolia</option> \n' +
    '<option value="Montserrat">Montserrat</option> \n' +
    '<option value="Morocco">Morocco</option> \n' +
    '<option value="Mozambique">Mozambique</option> \n' +
    '<option value="Myanmar">Myanmar</option> \n' +
    '<option value="Namibia">Namibia</option> \n' +
    '<option value="Nauru">Nauru</option> \n' +
    '<option value="Nepal">Nepal</option> \n' +
    '<option value="Netherlands">Netherlands</option> \n' +
    '<option value="Netherlands Antilles">Netherlands Antilles</option> \n' +
    '<option value="New Caledonia">New Caledonia</option> \n' +
    '<option value="New Zealand">New Zealand</option> \n' +
    '<option value="Nicaragua">Nicaragua</option> \n' +
    '<option value="Niger">Niger</option> \n' +
    '<option value="Nigeria">Nigeria</option> \n' +
    '<option value="Niue">Niue</option> \n' +
    '<option value="Norfolk Island">Norfolk Island</option> \n' +
    '<option value="Northern Mariana Islands">Northern Mariana Islands</option> \n' +
    '<option value="Norway">Norway</option> \n' +
    '<option value="Oman">Oman</option> \n' +
    '<option value="Pakistan">Pakistan</option> \n' +
    '<option value="Palau">Palau</option> \n' +
    '<option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> \n' +
    '<option value="Panama">Panama</option> \n' +
    '<option value="Papua New Guinea">Papua New Guinea</option> \n' +
    '<option value="Paraguay">Paraguay</option> \n' +
    '<option value="Peru">Peru</option> \n' +
    '<option value="Philippines">Philippines</option> \n' +
    '<option value="Pitcairn">Pitcairn</option> \n' +
    '<option value="Poland">Poland</option> \n' +
    '<option value="Portugal">Portugal</option> \n' +
    '<option value="Puerto Rico">Puerto Rico</option> \n' +
    '<option value="Qatar">Qatar</option> \n' +
    '<option value="Reunion">Reunion</option> \n' +
    '<option value="Romania">Romania</option> \n' +
    '<option value="Russian Federation">Russian Federation</option> \n' +
    '<option value="Rwanda">Rwanda</option> \n' +
    '<option value="Saint Helena">Saint Helena</option> \n' +
    '<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> \n' +
    '<option value="Saint Lucia">Saint Lucia</option> \n' +
    '<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> \n' +
    '<option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> \n' +
    '<option value="Samoa">Samoa</option> \n' +
    '<option value="San Marino">San Marino</option> \n' +
    '<option value="Sao Tome and Principe">Sao Tome and Principe</option> \n' +
    '<option value="Saudi Arabia">Saudi Arabia</option> \n' +
    '<option value="Senegal">Senegal</option> \n' +
    '<option value="Serbia and Montenegro">Serbia and Montenegro</option> \n' +
    '<option value="Seychelles">Seychelles</option> \n' +
    '<option value="Sierra Leone">Sierra Leone</option> \n' +
    '<option value="Singapore">Singapore</option> \n' +
    '<option value="Slovakia">Slovakia</option> \n' +
    '<option value="Slovenia">Slovenia</option> \n' +
    '<option value="Solomon Islands">Solomon Islands</option> \n' +
    '<option value="Somalia">Somalia</option> \n' +
    '<option value="South Africa">South Africa</option> \n' +
    '<option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> \n' +
    '<option value="Spain">Spain</option> \n' +
    '<option value="Sri Lanka">Sri Lanka</option> \n' +
    '<option value="Sudan">Sudan</option> \n' +
    '<option value="Suriname">Suriname</option> \n' +
    '<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> \n' +
    '<option value="Swaziland">Swaziland</option> \n' +
    '<option value="Sweden">Sweden</option> \n' +
    '<option value="Switzerland">Switzerland</option> \n' +
    '<option value="Syrian Arab Republic">Syrian Arab Republic</option> \n' +
    '<option value="Taiwan, Province of China">Taiwan, Province of China</option> \n' +
    '<option value="Tajikistan">Tajikistan</option> \n' +
    '<option value="Tanzania, United Republic of">Tanzania, United Republic of</option> \n' +
    '<option value="Thailand">Thailand</option> \n' +
    '<option value="Timor-leste">Timor-leste</option> \n' +
    '<option value="Togo">Togo</option> \n' +
    '<option value="Tokelau">Tokelau</option> \n' +
    '<option value="Tonga">Tonga</option> \n' +
    '<option value="Trinidad and Tobago">Trinidad and Tobago</option> \n' +
    '<option value="Tunisia">Tunisia</option> \n' +
    '<option value="Turkey">Turkey</option> \n' +
    '<option value="Turkmenistan">Turkmenistan</option> \n' +
    '<option value="Turks and Caicos Islands">Turks and Caicos Islands</option> \n' +
    '<option value="Tuvalu">Tuvalu</option> \n' +
    '<option value="Uganda">Uganda</option> \n' +
    '<option value="Ukraine">Ukraine</option> \n' +
    '<option value="United Arab Emirates">United Arab Emirates</option> \n' +
    '<option value="United Kingdom">United Kingdom</option> \n' +
    '<option value="United States">United States</option> \n' +
    '<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> \n' +
    '<option value="Uruguay">Uruguay</option> \n' +
    '<option value="Uzbekistan">Uzbekistan</option> \n' +
    '<option value="Vanuatu">Vanuatu</option> \n' +
    '<option value="Venezuela">Venezuela</option> \n' +
    '<option value="Viet Nam">Viet Nam</option> \n' +
    '<option value="Virgin Islands, British">Virgin Islands, British</option> \n' +
    '<option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> \n' +
    '<option value="Wallis and Futuna">Wallis and Futuna</option> \n' +
    '<option value="Western Sahara">Western Sahara</option> \n' +
    '<option value="Yemen">Yemen</option> \n' +
    '<option value="Zambia">Zambia</option> \n' +
    '<option value="Zimbabwe">Zimbabwe</option>' +
    '</select>'
];

// ADD->SUBMIT
function addFunction() {
    var newMember = document.getElementById("add-new-member");

    if (newMember.style.display === "block") {
        newMember.style.display = "none";
    } else {
        newMember.style.display = "block";
    }

    var add = document.getElementById("add-new");
    if (add.style.display === "none") {
        add.style.display = "block";
    } else {
        add.style.display = "none";
    }
}

// ADD USER
id = 0;

function addUser() {
    id++;
    var flname = document.getElementById("flname").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pinCode = document.getElementById("pinCode").value;
    var country = document.getElementById("focusedInput").value;
    var table = document.getElementsByTagName("table")[0];
    var button = document.querySelector(".submit-button");
    var newUser = table.insertRow();

    var cell00 = newUser.insertCell(0);
    var cell01 = newUser.insertCell(1);
    var cell02 = newUser.insertCell(2);
    var cell03 = newUser.insertCell(3);
    var cell04 = newUser.insertCell(4);
    var cell05 = newUser.insertCell(5);
    var cell06 = newUser.insertCell(6);

    cell00.innerHTML = id;
    cell01.innerHTML = flname;
    cell02.innerHTML = address;
    cell03.innerHTML = city;
    cell04.innerHTML = pinCode;
    cell05.innerHTML = country;
    cell06.innerHTML = `<button type="button " id="readButton${id}" class="btn btn-default btn - sm "> <span class = "glyphicon glyphicon-eye-open"> </span> </button>     
                        <button type="button "  onclick="editData(this)" class="btn btn-default btn - sm "> <span class = "glyphicon glyphicon-pencil"> </span> </button> 
                        <button type="button "     onclick="saveData(this)"  style="display: none" class="btn btn-edit btn-default btn - sm " > <span class = "glyphicon glyphicon-floppy-saved"> </span> </button> 
                        <button type="button "    class="btn btn-default btn - sm " onclick="openModal(this)" data-toggle="modal" data-target=".bs-example-modal-sm"> <span class = "glyphicon glyphicon-trash"> </span> </button>`

    //  READ INFO
    var readInfo = document.getElementById(`readButton${id}`)
    readInfo.addEventListener("click", function() {
        alert("Name: " + flname + "\n" + "Address: " + address + "\n" + "City: " + city + "\n" + "Pin Code: " + pinCode + "\n" + "Country: " + country);
    })

    addFunction();
}
//  VALIDATE 
function validateForm() {
    var flname = document.getElementById("flname");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var pinCode = document.getElementById("pinCode");
    var country = document.getElementById("focusedInput");


    if (flname.value !== "" && address.value !== "" && city.value !== "" && pinCode.value !== "" && country.value !== "") {
        addUser();
    } else {
        alert("Please fill in all fields!");

    }
}

// EDIT INFO
function editData(currentElement) {

    var row = currentElement.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');
    var value;
    var inputElement;
    var options;
    for (var i = 1; i < cells.length - 1; i++) {
        value = cells[i].innerText;
        cells[i].innerHTML = elements[i - 1];
        if (i != 5) {
            inputElement = cells[i].getElementsByTagName('input');
            inputElement[0].value = value;
        } else {
            selectElement = cells[i].getElementsByTagName('select');
            var options = selectElement[0].getElementsByTagName("option");
            for (var n = 0; n < options.length; n++) {
                if (options[n].value.trim() == value.trim()) {
                    options[n].selected = "selected";
                }
            }
        }
    }

    var lastCell = cells[cells.length - 1];
    var buttons = lastCell.getElementsByTagName('button');

    buttons[0].style.display = "none"
    buttons[1].style.display = "none"
    buttons[2].style.display = "inline-block"
    buttons[3].style.display = "none"
}

// SAVE INFO
function saveData(element) {
    var row = element.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');
    var value;
    for (var i = 1; i < cells.length - 1; i++) {
        if (i != 5) {
            var inputElement = cells[i].getElementsByTagName('input');
            value = inputElement[0].value;
            cells[i].innerText = value;
        } else {
            var selectElement = cells[i].getElementsByTagName('select');
            value = selectElement[0].value;
            cells[i].innerText = value;
        }
    }

    var lastCell = cells[cells.length - 1];
    var buttons = lastCell.getElementsByTagName('button');

    buttons[0].style.display = "inline-block"
    buttons[1].style.display = "inline-block"
    buttons[2].style.display = "none"
    buttons[3].style.display = "inline-block"

}

// DELETE INFO
function openModal(btn) {
    var deleteInfo = document.getElementById(`deleteYes`)
    deleteInfo.addEventListener("click", function() {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    })
}