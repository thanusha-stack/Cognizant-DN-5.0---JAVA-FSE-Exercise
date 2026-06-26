SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE TransferFunds(from_id in number, to_id in number, amount in number)
as bal number;
BEGIN
    select balance into bal from accounts where account_id=from_id;
    IF bal >= amount then
    
        UPDATE accounts set balance=balance-amount 
        where account_id=from_id;
        UPDATE accounts set balance=balance+amount 
        where account_id=to_id;

        commit;
        DBMS_OUTPUT.PUT_LINE('Transfer Successful');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');
    END IF;
END;
/

EXEC TransferFunds(1001,1002,500);

select * from accounts;