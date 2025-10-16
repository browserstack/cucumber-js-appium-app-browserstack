Feature: BStackDemo Tests Module B

  #Background:
  #  Given I skip the Wikipedia onboarding for moduleB
  #  And I tap on the search bar for moduleB

  @regression @p1
  Scenario: flaky test - random product selection
    When I randomly select a search term and search in moduleB
    Then there should be at least one result in moduleB

  Scenario: always failing test - missing element 1
    When I try to click a non-existent element "non-existent-1" in moduleB
    # No Then step - this should fail on the When step

  @regression
  Scenario: always passing test - example C
    Then true should be true in moduleB

  Scenario: always failing test - same stacktrace 1
    When I try to click a non-existent element "common-error" in moduleB
    # No Then step - this should fail on the When step

  Scenario: always failing test - same stacktrace 2
    When I try to click a non-existent element "common-error" in moduleB
    # No Then step - this should fail on the When step

  @regression
  Scenario: always passing test - example D
    Then true should be true in moduleB

  @regression
  Scenario: always passing test - example A
    Then 1 plus 1 should be 2 in moduleB
  
  @retry
  Scenario: Test with framework-level retry - 2 retries configured
    When I run a flaky test with retry in moduleB
    Then it should eventually pass or fail in moduleB
  
  @retry
  Scenario: Another Test with framework-level retry - 2 retries configured
    When I run a flaky test with retry in moduleB
    Then it should eventually pass or fail in moduleB

  Scenario: always passing test - example B
    Then "Browser" plus "Stack" should be "BrowserStack" in moduleB
