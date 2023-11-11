# 66 / 100
import unittest
from project.student_report_card import StudentReportCard


class TestStudentReportCard(unittest.TestCase):
    def setUp(self):
        self.report_card = StudentReportCard("John Doe", 5)

    def test_constructor(self):
        self.assertEqual(self.report_card.student_name, "John Doe")
        self.assertEqual(self.report_card.school_year, 5)
        self.assertEqual(self.report_card.grades_by_subject, {})

    def test_student_name_setter(self):
        self.report_card.student_name = "Jane Doe"
        self.assertEqual(self.report_card.student_name, "Jane Doe")
        with self.assertRaises(ValueError):
            self.report_card.student_name = ""

    def test_school_year_setter(self):
        self.report_card.school_year = 6
        self.assertEqual(self.report_card.school_year, 6)
        with self.assertRaises(ValueError):
            self.report_card.school_year = 0
        with self.assertRaises(ValueError):
            self.report_card.school_year = 13

    def test_add_grade(self):
        self.report_card.add_grade("Math", 90.0)
        self.assertIn("Math", self.report_card.grades_by_subject)
        self.assertEqual(self.report_card.grades_by_subject["Math"], [90.0])

    def test_average_grade_by_subject(self):
        self.report_card.add_grade("Math", 90.0)
        self.report_card.add_grade("Math", 80.0)
        self.assertIn("Math: 85.00", self.report_card.average_grade_by_subject())

    def test_average_grade_for_all_subjects(self):
        self.report_card.add_grade("Math", 90.0)
        self.report_card.add_grade("Science", 80.0)
        self.assertEqual(
            self.report_card.average_grade_for_all_subjects(), "Average Grade: 85.00"
        )

    def test_repr(self):
        self.report_card.add_grade("Math", 90.0)
        report = self.report_card.__repr__()
        self.assertIn("Name: John Doe", report)
        self.assertIn("Year: 5", report)
        self.assertIn("Math: 90.00", report)
        self.assertIn("Average Grade: 90.00", report)


if __name__ == "__main__":
    unittest.main()
