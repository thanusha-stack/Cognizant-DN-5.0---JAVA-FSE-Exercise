SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(dept_id in number,percent in number)
as
BEGIN
    UPDATE employees set salary=salary+(salary*(percent/100))
    where DEPARTMENT_ID=dept_id;
    commit;
END;
/