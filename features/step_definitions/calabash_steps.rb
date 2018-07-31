When(/^I open the app the "([^"]*)" opens$/) do |arg1|
    wait_for_element_exists('Text' + " text:'" + arg1 +"'")
    expect(element_exists('Text' + " text: '" + arg1 + "'")).to be true
end