SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE customers SET balance=balance*1.01 WHERE account_type='SAVINGS'; 
END;
/

exec ProcessMonthlyInterest;