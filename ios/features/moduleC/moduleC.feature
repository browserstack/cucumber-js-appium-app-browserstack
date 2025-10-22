Feature: BStackDemo Tests Module C

  #Background:
  #  Given I skip the Wikipedia onboarding for moduleC
  #  And I tap on the search bar for moduleC

  @p1
  Scenario: flaky test - passes and fails intermittently
    When flaky test in moduleC

  Scenario: always failing test - missing element 1
    When I try to click a non-existent element "non-existent-1" in moduleC
    # No Then step - this should fail on the When step

  Scenario: always passing test - example C
    Then true should be true in moduleC

  @must-pass
  Scenario: always passing test - example D
    Then true should be true in moduleC

  Scenario: always failing test - same stacktrace 1
    When I try to click a non-existent element "common-error" in moduleC
    # No Then step - this should fail on the When step

  Scenario: always failing test - same stacktrace 2
    When I try to click a non-existent element "common-error" in moduleC
    # No Then step - this should fail on the When step

  @p1 @must-pass
  Scenario: always passing test - example A
    Then 1 plus 1 should be 2 in moduleC
  
  @retry
  Scenario: Test with framework-level retry - 2 retries configured
    When I run a flaky test with retry in moduleC
    Then it should eventually pass or fail in moduleC
  
  @retry
  Scenario: Another Test with framework-level retry - 2 retries configured
    When I run a flaky test with retry in moduleC
    Then it should eventually pass or fail in moduleC

  @must-pass
  Scenario: always passing test - example B
    Then "Browser" plus "Stack" should be "BrowserStack" in moduleC
