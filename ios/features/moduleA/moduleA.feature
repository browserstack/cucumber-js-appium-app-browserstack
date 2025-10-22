Feature: BStackDemo Tests Module A

  #Background:
   # Given I skip the Wikipedia onboarding for moduleA
    #And I tap on the search bar for moduleA

  @p1
  Scenario: flaky test - passes and fails intermittently
    When flaky test in moduleA

  @regression
  Scenario: always failing test - missing element 1
    When I try to click a non-existent element "non-existent-1" in moduleA
    # No Then step - this should fail on the When step

  Scenario: always passing test - example C
    Then true should be true in moduleA

  Scenario: always failing test - same stacktrace 1
    When I try to click a non-existent element "common-error" in moduleA
    # No Then step - this should fail on the When step

  @regression
  Scenario: always failing test - same stacktrace 2
    When I try to click a non-existent element "common-error" in moduleA
    # No Then step - this should fail on the When step

  @regression @must-pass
  Scenario: always passing test - example D
    Then true should be true in moduleA

  @must-pass
  Scenario: always passing test - example A
    Then 1 plus 1 should be 2 in moduleA
  
  @retry
  Scenario: Test with framework-level retry - 2 retries configured
    When I run a flaky test with retry in moduleA
    Then it should eventually pass or fail in moduleA
  
  @retry
  Scenario: Another Test with framework-level retry - 2 retries configured
    When I run a flaky test with retry in moduleA
    Then it should eventually pass or fail in moduleA

  Scenario: always passing test - example B
    Then "Browser" plus "Stack" should be "BrowserStack" in moduleA
