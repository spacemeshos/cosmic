When(/^I open the app$/) do ||
    begin
        wait_for(timeout: 120) do
            expect(query('*').empty?).to be false
        end
    rescue Calabash::Android::WaitHelpers::WaitError => e
        puts e
    end
end
Then(/^on the First Page I see "([^"]*)" buttons$/) do |arg1|
    begin
        wait_for_element_exists('android.widget.button')
        expect(query('button').size === arg1).to be true
    rescue Calabash::Android::WaitHelpers::WaitError => e
        puts e
    end
end