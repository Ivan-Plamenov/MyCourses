# 66/100
import unittest
from project.student_report_card import StudentReportCard


class TestStudentReportCard(unittest.TestCase):
    def setUp(self):
        """Setup for the test methods."""
        self.student = StudentReportCard("John Doe", 5)

    def test_initialization(self):
        self.assertEqual(self.student.student_name, "John Doe")
        self.assertEqual(self.student.school_year, 5)

    def test_invalid_initialization(self):
        with self.assertRaises(ValueError):
            StudentReportCard("", 5)
        with self.assertRaises(ValueError):
            StudentReportCard("John Doe", 0)

    def test_add_grade_new_subject(self):
        self.student.add_grade("Math", 90)
        self.assertEqual(self.student.grades_by_subject["Math"], [90])

    def test_add_grade_existing_subject(self):
        self.student.add_grade("Math", 90)
        self.student.add_grade("Math", 85)
        self.assertEqual(self.student.grades_by_subject["Math"], [90, 85])

    def test_average_grade_by_subject(self):
        self.student.add_grade("Math", 90)
        self.student.add_grade("Math", 80)
        self.assertIn("Math", self.student.average_grade_by_subject())

    def test_average_grade_for_all_subjects(self):
        self.student.add_grade("Math", 90)
        self.student.add_grade("Science", 80)
        self.assertEqual(
            self.student.average_grade_for_all_subjects(), "Average Grade: 85.00"
        )

    def test_full_report_card_workflow(self):
        self.student.add_grade("Math", 90)
        self.student.add_grade("Science", 80)
        self.assertIn("Math", self.student.average_grade_by_subject())
        self.assertIn("Science", self.student.average_grade_by_subject())
        self.assertEqual(
            self.student.average_grade_for_all_subjects(), "Average Grade: 85.00"
        )

    def test_destructive_input(self):
        with self.assertRaises(ValueError):
            self.student.add_grade(
                "Math", -100
            )  # Assuming negative grades are not allowed


if __name__ == "__main__":
    unittest.main()
