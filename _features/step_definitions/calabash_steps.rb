# require 'calabash-android/calabash_steps'

Then("I should be redirected to the {string}") do |string|
    wait_for_element_exists('Text' + " text:'" + string +"'")
    expect(element_exists('Text' + " text: '" + string +"'")).to be true
end